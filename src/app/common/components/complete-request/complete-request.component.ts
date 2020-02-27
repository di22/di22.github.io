import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../../store';
import * as fromExemptReasonsSelector from '../../../store/general/lookups/exemptReasons/selectors/exempt-reason.selectors';
import {FormBuilder, FormControl} from '@angular/forms';
import {EncryptDecryptService} from '../../../services/config/encrypt-decrypt.service';
import {ValidationMessagesService} from '../../../services/config/validation-messages.service';
import {CustomerService} from '../../services/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TableDataService} from '../../services/table-data.service';
import {Observable} from 'rxjs';
import {loadExemptReasons} from '../../../store/general/lookups/exemptReasons/actions/exempt-reason.actions';
import * as fromTransactionCategoriesSelector from '../../../store/general/categories/main-categories-selector';
import * as fromUser_ORGSelector from '../../../store/general/user-org-details/selectors/user-org.selectors';
import {loadMainCategories} from '../../../store/general/categories/main-categories.actions';
import * as fromRequestDebagaSelectors from '../debaga/store/selectors/request-debaga.selectors';
import {DatePipe} from '@angular/common';
import {AuthService} from '../../../auth/services/auth.service';
import {loadUserDetails} from '../../../store/general/user-org-details/actions/user-org.actions';
import * as fromRelativesSelectors from '../../../store/general/lookups/relatives/selectors/relatives.selectors';
import * as fromCustomerSelectors from '../../parties/party/store/customer/selectors/customer.selectors';
import {Relative} from '../../../DTO`s/relative';
import {invoiceEstimation} from './store/actions/complete-request.actions';
import {PDFService} from '../../services/pdf`s.service';


@Component({
  selector: 'app-complete-request',
  templateUrl: './complete-request.component.html',
  styleUrls: ['./complete-request.component.scss'],
  providers: [DatePipe]
})
export class CompleteRequestComponent implements OnInit {

  autoCalc: FormControl;
  isExempt: FormControl;
  exemptReasons: FormControl;
  user: any;
  transactionId: number;
  requestId: number;
  orgId: number;
  transaction: any;
  relatives: Relative[] = [];
  customers = [];
  expirationPeriodCount: number;
  expirationPeriod: number;
  expiryDate: any;
  fees: number;
  transactionCategories$: Observable<any> = this.store.select(state => fromTransactionCategoriesSelector.selectCategories(state));
  exemptReasons$: Observable<any> = this.store.select(state => fromExemptReasonsSelector.selectAllExemptReasons(state));
  expiryDate$: Observable<any> = this.store.select(state => fromRequestDebagaSelectors.selectExpiryDate(state));
  debagaFees$: Observable<any> = this.store.select(state => fromRequestDebagaSelectors.selectDebagaFees(state));
  userDetails$: Observable<any> = this.store.select(state => fromUser_ORGSelector.selectUserDetails(state));
  relatives$: Observable<any> = this.store.select(state => fromRelativesSelectors.relativesSelector(state));
  customers$: Observable<any> = this.store.select(state => fromCustomerSelectors.selectUserEntities(state));
  constructor(private store: Store<State>,
              private formBuilder: FormBuilder,
              private encryptDecryptService: EncryptDecryptService,
              private validationMessagesService: ValidationMessagesService,
              private customerService: CustomerService,
              private pdfService: PDFService,
              private authService: AuthService,
              private activatedRout: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.user = this.authService.getUserFromSession();
    this.store.dispatch(loadUserDetails({userId: this.user.id}));
    this.autoCalc = this.formBuilder.control({value: '', disabled: true});
    this.isExempt = this.formBuilder.control(false);
    this.exemptReasons = this.formBuilder.control({value: '', disabled: true});
    this.isExempt.valueChanges.subscribe(value => {
      if (value) {
        this.exemptReasons.enable();
      } else {
        this.exemptReasons.disable();
      }
    });
    this.store.dispatch(loadExemptReasons());
    this.activatedRout.data.subscribe(params => {
      this.transactionId = params.transactionId;
    //  this.store.dispatch(GetSelectedCategory({id: this.transactionId}));
    });
    this.transactionCategories$
      .subscribe(
        (transactions: any) => {
          if (transactions.length === 0) {
            this.store.dispatch(loadMainCategories());
          } else {
            this.transaction = transactions.find(tr => tr.id === this.transactionId);
            this.expirationPeriodCount = this.transaction.expirationPeriodCount ? this.transaction.expirationPeriodCount : 1;
            this.expirationPeriod = this.transaction.expirationPeriod;
          }});

    this.activatedRout.params.subscribe(params => {
        this.requestId = params.requestId;
    });

    this.expiryDate$.subscribe(ex => {
      if (ex && ex.text) {
      const date = ex.text.split('/');
      this.expiryDate = new Date(date[2], date[1], date[0]);
      }
    });
    this.debagaFees$.subscribe(fee => {
      this.fees = fee;
    });
    this.userDetails$.subscribe(user => {
      this.orgId = user ? user.OrganizationUnitId : null;
    });
    this.customers$.subscribe(cust => {
      this.customers = cust;
    });
    this.relatives$.subscribe(re => {
      this.relatives = re;
    });
  }

  getExceeds = (): number => {
    let endNextPeriod: any = new Date();
    const endDateArray = [];
    let countDateExceeds = 1;
    for (let i = 0; i < this.expirationPeriodCount; i++) {
      endNextPeriod = endNextPeriod.setMonth(endNextPeriod.getMonth() + this.expirationPeriod);
      endDateArray.push(new Date(endNextPeriod));
    }
    endDateArray.forEach((e, i) => {
      if (this.expiryDate.setHours(0, 0, 0, 0) > e.setHours(0, 0, 0, 0)) {
        countDateExceeds++;
      }
    });
    return countDateExceeds;
  }

  getRelatives = (): Relative => {
    let relative = null;
    this.customers.forEach(cust => {
      if (cust.relativeRelation) {
      relative = this.relatives.find(re => re.id === +cust.relativeRelation && re.className < 4);
      }
    });
    return relative;
}

getRelativeAmount = (): number => {
    let relativeAmount = 0;
    if (this.getRelatives()) {
      if (this.getRelatives().className === 1) { relativeAmount = this.transaction.showFirstClassRelation; }
      if (this.getRelatives().className === 2) { relativeAmount = this.transaction.showSecondClassRelation; }
      if (this.getRelatives().className === 3) { relativeAmount = this.transaction.showThirdClassRelation; }
      if (this.getRelatives().className === 4) { relativeAmount = this.transaction.showFourthClassRelation; }
    }
    return relativeAmount;
}
  estimate = () => {
    const  data = {
      data: {
        requestId: this.requestId,
        paymentInvoices: [
          {
            itemsCount: 0, // $scope.CopiesNumber,
            paymentAmount: -1,
            paymentType: {
              id: 1   // عدد النسخ
            }
          },
          {
            itemsCount: -1,
            paymentAmount: -1,
            paymentType: {
              id: 3   // عدد الاطراف
            }
          },
          {
            itemsCount: 1,        // ستعتمد مستقبلا على تكرار الفترة
            paymentAmount: -1,    // سيتم حساب القيمة الثابتة الأصلية مبدئياً
            paymentType: {
              id: 2
            }
          }
        ],
        paymentSource: {
          id: 1
        },
        exemptedFromFees: false,
        otherExcemptedReason: '',
        exemptedReason: null,
        receiptNo: null,
        authNo: 1,
        cardNo: 1,
        cardName: 'estimation',
        terminalId: 1,
        transactionsSequenceNo: 1,
        totalAmount: 1,
        bookingDate: null,
        organizationUnitId: this.orgId ? this.orgId : null
      }
    };

    if (this.getRelativeAmount()) {
      data.data.paymentInvoices[2].paymentAmount = this.getRelativeAmount();
      if (this.router.url.includes('POA_FOR_RELATIVES')) {
        data.data.paymentInvoices[2].itemsCount = 1;
      }
    } else {
      if (this.transaction.percent && this.transaction.percent > 0) {

      } else {
        if (this.fees && this.fees > 0) {
          data.data.paymentInvoices[2].paymentAmount = this.fees;
          data.data.paymentInvoices[2].itemsCount = this.getExceeds();
        }
      }
    }
    return data;
  }


  feesEstimation = () => {
    const envelop = JSON.stringify({data: JSON.stringify(this.estimate())});
    this.store.dispatch(invoiceEstimation({invoice: envelop}));
  }

  mo7rrReview = () => {
    const params = {x__RepName: 'POA_REPORT',
      p___REQUEST_ID: this.encryptDecryptService.encryptUsingAES256(this.requestId),
      xat: this.authService.getToken()};
    this.pdfService.mo7rrView(params);
  }
}
