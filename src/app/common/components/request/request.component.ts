import {Component, OnDestroy, OnInit} from '@angular/core';
import {CreateRequest, GetRequestDetails, ResetRequests} from './store/actions/request.actions';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '../../../store';
import {ActivatedRoute, Router} from '@angular/router';
import {loadGetRequestCustomerTypes} from '../../../store/general/lookups/request-custiomer-types/actions/get-request-customer-type.actions';
import {loadCustomerIdTypes} from '../../../store/general/lookups/customer-id-types/actions/custiomer-id-type.actions';
import {loadNationalities} from '../../../store/general/lookups/nationalites/actions/nationalites.actions';
import {loadAdminTypes} from '../../../store/general/lookups/admin-types/actions/admin-type.actions';
import {loadTransactionCustTypes} from '../../../store/general/lookups/transaction-cust-types/actions/transaction-cust-type.actions';
import {loadRelatives} from '../../../store/general/lookups/relatives/actions/relatives.actions';
import {loadLawOffices} from '../../../store/general/lookups/law-offices/actions/law-office.actions';
import {loadDebagas} from '../../../components/side-menu-pages/admin-debaga/store/actions/debaga.actions';
import {ResetConfig, SetTransactionId} from '../../../store/general/config/config.actions';
import {ResetCustomers} from '../parties/party/store/actions/customer.actions';
import {ResetDebagas} from '../debaga/store/actions/request-debaga.actions';
import {clearTransactionRequestAttachments} from '../request-attachment/store/actions/transaction-request-attachment.actions';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit, OnDestroy {
  transactionId: number;
  requestId: number;
  request: FormGroup;
  constructor(private store: Store<State>,
              private formBuilder: FormBuilder,
              private activatedRout: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    this.initForms();
    this.activatedRout.data.subscribe(params => {
      this.transactionId = params.transactionId;
      this.store.dispatch(SetTransactionId({Id: this.transactionId}));
      this.request.controls.transactionType.setValue({id: this.transactionId});
      this.getTransactionDebaga(this.transactionId);
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

  ngOnDestroy(): void {
    this.store.dispatch(ResetRequests());
    this.store.dispatch(ResetCustomers());
    this.store.dispatch(ResetDebagas());
    this.store.dispatch(ResetConfig());
    this.store.dispatch(clearTransactionRequestAttachments());
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
  getTransactionDebaga = (transactionId) => {
    this.store.dispatch(loadDebagas({transactionId}));
  }


}
