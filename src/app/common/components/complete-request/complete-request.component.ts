import { Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../../store';
import * as fromExemptReasonsSelector from '../../../store/general/lookups/exemptReasons/selectors/exempt-reason.selectors';
import {FormBuilder, FormControl} from '@angular/forms';
import {EncryptDecryptService} from '../../../services/config/encrypt-decrypt.service';
import {ValidationMessagesService} from '../../../services/config/validation-messages.service';
import {CustomerService} from '../../services/customer.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {loadExemptReasons} from '../../../store/general/lookups/exemptReasons/actions/exempt-reason.actions';
import * as fromUser_ORGSelector from '../../../store/general/user-org-details/selectors/user-org.selectors';
import {DatePipe} from '@angular/common';
import {AuthService} from '../../../auth/services/auth.service';
import {loadUserDetails} from '../../../store/general/user-org-details/actions/user-org.actions';
import {PDFService} from '../../services/pdf`s.service';
import {CompleteRequestService} from '../../services/complete-request.service';
import {MatDialog} from '@angular/material/dialog';
import {FeesModalComponent} from '../../../modal/fees-modal/fees-modal.component';
import {FeesService} from '../../../services/fees.service';
import {PartiesFeesService} from '../../../services/parties-fees.service';
import {TransactionService} from '../../../services/transaction.service';
import {MessageService} from '../../../services/config/message.service';


@Component({
  selector: 'app-complete-request',
  templateUrl: './complete-request.component.html',
  styleUrls: ['./complete-request.component.scss'],
  providers: [DatePipe]
})
export class CompleteRequestComponent implements OnInit {

  feess: FeesService;
  partiesFees: PartiesFeesService;
  transactionClass: TransactionService;

  autoCalc: FormControl;
  isExempt: FormControl;
  exemptReasons: FormControl;
  user: any;
  transactionId: number;
  requestId: number;
  orgId: number;
  transaction: any;

  exemptReasons$: Observable<any> = this.store.select(state => fromExemptReasonsSelector.selectAllExemptReasons(state));
  userDetails$: Observable<any> = this.store.select(state => fromUser_ORGSelector.selectUserDetails(state));

  constructor(private store: Store<State>,
              private formBuilder: FormBuilder,
              private encryptDecryptService: EncryptDecryptService,
              private validationMessagesService: ValidationMessagesService,
              private customerService: CustomerService,
              private completeRequestService: CompleteRequestService,
              private pdfService: PDFService,
              private dialog: MatDialog,
              private authService: AuthService,
              private activatedRout: ActivatedRoute) {
    this.transactionClass = new TransactionService(store, activatedRout);
  }

  ngOnInit(): void {
    this.transaction = this.transactionClass.transaction;
    this.transactionId = this.transactionClass.transactionID;
    this.requestId = this.transactionClass.requestID;


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

    this.userDetails$.subscribe(user => {
      this.orgId = user ? user.OrganizationUnitId : null;
    });
  }

  partiesFee = () => {
  this.partiesFees = new PartiesFeesService(this.store, this.transaction, this.transactionClass.Exceeds);
  this.partiesFees.calc();
  this.feess = new FeesService(this.partiesFees);
  return this.feess.showFees();
};
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
           this.partiesFee()

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

    return data;
  };


  feesEstimation = () => {
    const envelop = JSON.stringify({data: JSON.stringify(this.estimate())});
    this.completeRequestService.invoiceEstimation(envelop).subscribe((res) => {
      const paymentInvoices = JSON.parse(res.d);
      const filterData = this.filterPaymentInvoices(paymentInvoices.data.paymentInvoices);
      const dialogRef = this.dialog.open(FeesModalComponent, {
        width: '500px',
        data: filterData
      });

      dialogRef.afterClosed().subscribe(() => {
      });
    });
  };
filterPaymentInvoices = (data) => {
  const estimatedInvoice = [];
  let totalInvoice = 0;
  data.forEach((per, i) => {
    totalInvoice += per.paidValue * per.itemsCount;
    if (per.paymentTypeLu.id == '2' && per.itemsCount > 0) {
      estimatedInvoice.push({
         'feesType': this.partiesFees.fixedValue
        , 'value': per.paidValue
        , 'count': per.itemsCount
        , 'total': per.paidValue * per.itemsCount
      });
    }
    if (per.paymentTypeLu.id == '3') {
      if (per.itemsCount > 0)
        estimatedInvoice.push({
          'feesType': ' الأطراف'
          , 'value': per.paidValue
          , 'count': per.itemsCount
          , 'total': per.paidValue * per.itemsCount
        });
    }
    if (per.paymentTypeLu.id == '1') {
      if (per.itemsCount > 0)
        estimatedInvoice.push({
          'feesType': ' النصوص'
          , 'value': per.paidValue
          , 'count': per.itemsCount
          , 'total': per.paidValue * per.itemsCount
        });
    }

  });
  return {array: estimatedInvoice, total: totalInvoice};
}
  mo7rrReview = () => {
    const params = {x__RepName: 'POA_REPORT',
      p___REQUEST_ID: this.encryptDecryptService.encryptUsingAES256(this.requestId),
      xat: this.authService.getToken()};
    this.pdfService.mo7rrView(params);
  }
}
