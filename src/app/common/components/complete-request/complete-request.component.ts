import {Component, OnInit} from '@angular/core';
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
import {DatePipe} from '@angular/common';
import {AuthService} from '../../../auth/services/auth.service';
import {loadUserDetails} from '../../../store/general/user-org-details/actions/user-org.actions';
import {PDFService} from '../../services/pdf`s.service';
import {CompleteRequestService} from '../../services/complete-request.service';
import {MatDialog} from '@angular/material/dialog';
import {FeesModalComponent} from '../../../modal/fees-modal/fees-modal.component';
import {MessageService} from '../../../services/config/message.service';
import {IFees} from '../../fees-package/IFees';
import {CFeesEstimation} from '../../fees-package/CFees-Estimation';


@Component({
  selector: 'app-complete-request',
  templateUrl: './complete-request.component.html',
  styleUrls: ['./complete-request.component.scss'],
  providers: [DatePipe]
})
export class CompleteRequestComponent implements OnInit {

  autoCalc: FormControl;
  cFeesEstimat: CFeesEstimation;
  isExempt: FormControl;
  exemptReasons: FormControl;
  user: any;
  transactionId: number;
  requestId: number;
  transaction: any;
  exemptReasons$: Observable<any> = this.store.select(state => fromExemptReasonsSelector.selectAllExemptReasons(state));

  constructor(private store: Store<State>,
              private formBuilder: FormBuilder,
              private encryptDecryptService: EncryptDecryptService,
              private validationMessagesService: ValidationMessagesService,
              private customerService: CustomerService,
              private completeRequestService: CompleteRequestService,
              private pdfService: PDFService,
              private dialog: MatDialog,
              private authService: AuthService,
              private activatedRout: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRout.params.subscribe(params => {
      if (params.requestId) {
        this.requestId = params.requestId;
      }
    });

    this.activatedRout.data.subscribe(params => {
      this.transactionId = params.transactionId;
    });


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


  }

  estimate = () => {
    this.cFeesEstimat = new CFeesEstimation(this.store, this.requestId)
  return this.cFeesEstimat.firstEstimation();
  };


  feesEstimation = () => {
    const envelop = JSON.stringify({data: JSON.stringify(this.estimate())});
    this.completeRequestService.invoiceEstimation(envelop).subscribe((res) => {
      const paymentInvoices = JSON.parse(res.d);
      const dialogRef = this.dialog.open(FeesModalComponent, {
        width: '500px',
        data: this.cFeesEstimat.finalEstimation(paymentInvoices.data.paymentInvoices)
      });

      dialogRef.afterClosed().subscribe(() => {
      });
    });
  };




  mo7rrReview = () => {
    const params = {x__RepName: 'POA_REPORT',
      p___REQUEST_ID: this.encryptDecryptService.encryptUsingAES256(this.requestId),
      xat: this.authService.getToken()};
    this.pdfService.mo7rrView(params);
  }
}
