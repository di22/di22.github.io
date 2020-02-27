import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {Observable} from 'rxjs';
import {RequestType} from '../../../DTO`s/request-type';
import {Store} from '@ngrx/store';
import {RequestStatus} from '../../../DTO`s/request-status';
import {Employee} from '../../../DTO`s/employee';
import {loadInbox} from './store/actions/inbox.actions';
import {State} from '../../../store';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EncryptDecryptService} from '../../../services/config/encrypt-decrypt.service';
import * as selectFeatureResult from './store/selectors/inbox.selectors';
import {loadUserDetails} from '../../../store/general/user-org-details/actions/user-org.actions';
import {AuthService} from '../../../auth/services/auth.service';
import * as fromUser_ORGSelector from '../../../store/general/user-org-details/selectors/user-org.selectors';
import {PDFService} from '../../../common/services/pdf`s.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {LookupsService} from '../../../services/lookups.service';
import {ActivatedRoute, Router} from '@angular/router';
import {RouteService} from '../../../services/route.service';
import * as fromTransactionCategoriesSelector from '../../../store/general/categories/main-categories-selector';


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

  user: any;
  searchObj: any = {data: {}};
  dateFrom: any;
  dateTo: {};
  userDetails$: Observable<any> = this.store.select(state => fromUser_ORGSelector.selectUserDetails(state));
  requestTypes$: Observable<RequestType[]> = this.lookupsService.getRequestCustomerTypes();
  requestStatuses$: Observable<RequestStatus[]> = this.lookupsService.getRequestStatuses();
  employee$: Observable<Employee[]> = this.lookupsService.getAllEmployee();
  transactionCategories$: Observable<any> = this.store.select(state => fromTransactionCategoriesSelector.selectCategories(state));
  searchResult$: Observable<any[]> = this.store.select(state => selectFeatureResult.selectFeatureResult(state));
  displayedColumns: string[] = ['position', 'request-id', 'request-date', 'arrival-date', 'request-status', 'request-type', 'notes', 'show', 'attachments'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>();
  searchForm: FormGroup;
  constructor(private store: Store<State>,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private pdfService: PDFService,
              private lookupsService: LookupsService,
              private routeService: RouteService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
            //  private activatedRouteSnapShot: ActivatedRouteSnapshot,
              private encryptDecryptService: EncryptDecryptService) { }

  ngOnInit() {
    this.initForms();
    this.user = this.authService.getUserFromSession();
    this.store.dispatch(loadUserDetails({userId: this.user.id}));
    this.userDetails$.subscribe(user => {
       if (user && user.OrganizationUnitId) {
         this.searchForm.controls.organizationUnitId.patchValue(user.OrganizationUnitId);
         this.search(this.searchForm.value);
       }
    });
    this.searchResult$.subscribe(res => {
      this.dataSource.data = res;
    });
    this.dataSource.paginator = this.paginator;
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
  mo7rrReview = (requestId) => {
    const params = {x__RepName: 'POA_REPORT',
      p___REQUEST_ID: this.encryptDecryptService.encryptUsingAES256(`${requestId}`),
      xat: this.authService.getToken()};
    this.pdfService.mo7rrView(params);
  }
  routeToRequest = (requestType, requestId) => {
    this.routeService.route(requestType, requestId);
  }

  clearForm = () => {
    this.searchForm.reset();
  }

  encryption = (data) => {
    return this.encryptDecryptService.encryptUsingAES256(data);
  }
}
