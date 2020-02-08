import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {Observable} from 'rxjs';
import * as fromLookups from '../../../store/general/lookups/lookups.reducer';
import * as fromRequestTypes from '../../../store/general/lookups/request-types/reducers/request-type.reducer';
import * as fromRequestStatus from '../../../store/general/lookups/request-status/reducers/request-status.reducer';
import * as fromEmployees from '../../../store/general/lookups/employee/reducers/employees.reducer';
import {RequestType} from '../../../DTO`s/request-type';
import {Store} from '@ngrx/store';
import {RequestStatus} from '../../../DTO`s/request-status';
import {Employee} from '../../../DTO`s/employee';
import {loadRequestStatuses} from '../../../store/general/lookups/request-status/actions/request-status.actions';
import {loadRequestTypes} from '../../../store/general/lookups/request-types/actions/request-type.actions';
import {loadEmployees} from '../../../store/general/lookups/employee/actions/employees.actions';
import {loadInbox} from './store/actions/inbox.actions';
import {State} from '../../../store';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EncryptDecryptService} from '../../../services/config/encrypt-decrypt.service';
import * as selectFeatureResult from './store/selectors/inbox.selectors';


import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'ar-AR'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}]
})
export class InboxComponent implements OnInit {

  @ViewChild('contentToConvert') pdfTable: ElementRef;

  searchObj: any = {data: {}};
  dateFrom: any;
  dateTo: {};
  lookups: Observable<fromLookups.State>;
  requestTypes$: Observable<RequestType[]> = this.store.select(state => state[fromRequestTypes.requestTypeFeatureKey].RequestTypes);
  requestStatuses$: Observable<RequestStatus[]> = this.store.select(state => state[fromRequestStatus.requestStatusFeatureKey].requestStatuses);
  employee$: Observable<Employee[]> = this.store.select(state => state[fromEmployees.employeesFeatureKey].employees);
  searchResult$: Observable<any[]> = this.store.select(state => selectFeatureResult.selectFeatureResult(state));
  displayedColumns: string[] = ['position', 'request-id', 'request-date', 'arrival-date', 'request-status', 'request-type', 'notes', 'show', 'attachments'];

  searchForm: FormGroup;
  constructor(private store: Store<State>,
              private formBuilder: FormBuilder,
              private encryptDecryptService: EncryptDecryptService) { }

  ngOnInit() {
    this.initForms();
    this.lookups = this.store.select(state => state);
    this.store.dispatch(loadRequestStatuses({}));
    this.store.dispatch(loadRequestTypes({}));
    this.store.dispatch(loadEmployees({}));

    this.search(this.searchForm.value);
  }

  initForms = () => {
    this.searchForm = this.formBuilder.group({
    employeeId: [],
    id: [],
    loginId: [],
    organizationUnitId: [],
    requestDateFrom: [],
    requestDateTo: [],
    requestStatusId: [],
    transactionTypeId: [],
    pageNo: [],
    pageSize: [1000000000],
    });
  }

  search = (searchObj) => {
    searchObj.requestDateTo = this.dateTo;
    searchObj.requestDateFrom = this.dateFrom;
    this.searchObj = Object.assign({}, this.searchObj, {
      data: { ...searchObj }
    });
   // const encryptData = this.encryption(this.searchObj);
    this.store.dispatch(loadInbox({data: this.searchObj}));
  }
  onChangesFromDate = (event: any) => {
    this.dateFrom = {
      day: `${event.value._i.date}`,
      month: `${event.value._i.month + 1}`,
      year: `${event.value._i.year}`
    };
    }
  onChangesToDate = (event: any) => {
    this.dateTo = {
      day: `${event.value._i.date}`,
      month: `${event.value._i.month + 1}`,
      year: `${event.value._i.year}`
    };
  }
  clearForm = () => {
    this.searchForm.reset();
  }

 captureScreen() {

      const doc = new jspdf();
      doc.setFont('Arial');
      const specialElementHandlers = {
        '#editor'(element, renderer) {
          return true;
        }
      };

      const pdfTable = this.pdfTable.nativeElement;

      doc.fromHTML(pdfTable.textContent, 15, 15, {
        width: 190,
        elementHandlers: specialElementHandlers
      });
      doc.save('tableToPdf.pdf');
  }
  encryption = (data) => {
    return this.encryptDecryptService.encryptUsingAES256(data);
  }
}
