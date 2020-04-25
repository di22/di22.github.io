import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CreateRequest, GetRequestDetails} from './store/actions/request.actions';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '../../../store';
import {ActivatedRoute, Router} from '@angular/router';
import {TransactionService} from '../../../services/transaction.service';
import {loadGetRequestCustomerTypes} from '../../../store/general/lookups/request-custiomer-types/actions/get-request-customer-type.actions';
import {loadCustomerIdTypes} from '../../../store/general/lookups/customer-id-types/actions/custiomer-id-type.actions';
import {loadNationalities} from '../../../store/general/lookups/nationalites/actions/nationalites.actions';
import {loadAdminTypes} from '../../../store/general/lookups/admin-types/actions/admin-type.actions';
import {loadTransactionCustTypes} from '../../../store/general/lookups/transaction-cust-types/actions/transaction-cust-type.actions';
import {loadRelatives} from '../../../store/general/lookups/relatives/actions/relatives.actions';
import {loadLawOffices} from '../../../store/general/lookups/law-offices/actions/law-office.actions';
import {IconService} from '../../../services/icon.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  transactionId: number;
  requestId: number;
  request: FormGroup;
  transaction: TransactionService;
  constructor(private store: Store<State>,
              private iconService: IconService,
              private formBuilder: FormBuilder,
              private activatedRout: ActivatedRoute,
              private router: Router) {
    this.iconService.registerIcons();
    this.transaction = new TransactionService(store, activatedRout);
  }

  ngOnInit(): void {
    this.initForms();
    this.activatedRout.data.subscribe(params => {
      this.transactionId = params.transactionId;
      this.request.controls.transactionType.setValue({id: this.transactionId});
      this.store.dispatch(loadTransactionCustTypes({id: {data: {transactionId: this.transactionId}}}));
      this.store.dispatch(loadRelatives({transactionId: {data: {transactionId: this.transactionId}}}));
    });
    this.activatedRout.params.subscribe(params => {
      if (params.requestId) {
        this.requestId = params.requestId;
        this.store.dispatch(GetRequestDetails( {requestId: this.requestId}));
      }
    });
    this.store.dispatch(loadGetRequestCustomerTypes());
    this.store.dispatch(loadCustomerIdTypes());
    this.store.dispatch(loadNationalities());
    this.store.dispatch(loadAdminTypes());
    if (this.router.url.includes('POA_LAWYER')) {
      this.store.dispatch(loadLawOffices({resourc_id: window.btoa('LawyerCompanyPartner')}));
    }
  }
  initForms = () => {

    this.request = this.formBuilder.group({
      requestDate: [null],
      requestStatusHistory: [{statusReason: ''}],
      requestNo: [''],
      isPortal: ['0'],
      transactionType: [''],
      requestFinishDate: [''],
      requestNotes: [''],
      employeeNotes: [''],
      userIdApprove: [''],
      procurationCustomers: [[]]
    });
  }
  createRequest = (searchObj) => {
    const data = {data: {request: searchObj}};
    this.store.dispatch(CreateRequest({request: data}));
  }
}
