import { Component, OnInit } from '@angular/core';
import {CreateRequest, GetRequestDetails} from '../../parties/party/store/request/actions/request.actions';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import moment from 'moment';
import {loadRelatives} from '../../../store/general/lookups/relatives/actions/relatives.actions';
import {loadLawOffices} from '../../../store/general/lookups/law-offices/actions/law-office.actions';
import {Store} from '@ngrx/store';
import {State} from '../../../store';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  transactionId: number;
  requestId: number;
  request: FormGroup;
  constructor(private store: Store<State>,
              private formBuilder: FormBuilder,
              private activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForms();
    this.activatedRout.data.subscribe(params => {
      this.transactionId = params.transactionId;
      this.request.controls.transactionType.setValue({id: this.transactionId});
    });
    this.activatedRout.params.subscribe(params => {
      if (params.requestId) {
        this.requestId = params.requestId;
      }
    });
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
