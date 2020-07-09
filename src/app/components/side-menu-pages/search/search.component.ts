import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import * as fromUser_ORGSelector from '../../../store/general/user-org-details/selectors/user-org.selectors';
import * as fromTransactionCategoriesSelector from '../../../store/general/categories/main-categories-selector';
import * as selectFeatureResult from '../inbox/store/selectors/inbox.selectors';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '../../../store';
import {AuthService} from '../../../auth/services/auth.service';
import {AttachmentsService} from '../../../common/services/attachments.service';
import {RouteService} from '../../../services/route.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {EncryptDecryptService} from '../../../services/config/encrypt-decrypt.service';
import {loadUserDetails} from '../../../store/general/user-org-details/actions/user-org.actions';
import {take} from 'rxjs/operators';
import {loadMainCategories} from '../../../store/general/categories/main-categories.actions';
import {GetRequestDetails} from '../../../common/components/request/store/actions/request.actions';
import {RequestAttachmentsModalComponent} from '../../../modal/request-attachments-modal/request-attachments-modal.component';
import {RequestCustomerType} from '../../../DTO`s/request-customer-type';
import * as fromRequestCustomerTypes
  from '../../../store/general/lookups/request-custiomer-types/reducers/get-request-customer-type.reducer';
import {loadGetRequestCustomerTypes} from '../../../store/general/lookups/request-custiomer-types/actions/get-request-customer-type.actions';
import {CustomerIdType} from '../../../DTO`s/customer-id-type';
import * as fromCustomerIdTypes from '../../../store/general/lookups/customer-id-types/reducers/custiomer-id-type.reducer';
import {loadCustomerIdTypes} from '../../../store/general/lookups/customer-id-types/actions/custiomer-id-type.actions';
import {InboxService} from '../../../services/inbox.service';
import {TableDataService} from '../../../common/services/table-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  user: any;
  searchObj: any = {data: {}};
  dateFrom: any;
  dateTo: {};
  maxLength = 9;
  columns = [];
  userDetails$: Observable<any> = this.store.select(state => fromUser_ORGSelector.selectUserDetails(state));
  requestCustomerTypes$: Observable<RequestCustomerType[]> = this.store.select(state => state[fromRequestCustomerTypes.getRequestCustomerTypeFeatureKey].types);
  transactionCategories$: Observable<any> = this.store.select(state => fromTransactionCategoriesSelector.selectCategories(state));
  customerIdTypes$: Observable<CustomerIdType[]> = this.store.select(state => state[fromCustomerIdTypes.customerIdTypeFeatureKey].Id);
  searchResult$: Observable<any[]> = this.store.select(state => selectFeatureResult.selectFeatureResult(state));
  displayedColumns: string[] = ['position', 'request-id', 'request-date', 'arrival-date', 'request-status', 'request-type', 'notes', 'show', 'attachments'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>();
  searchForm: FormGroup;
  constructor(private store: Store<State>,
              private formBuilder: FormBuilder,
              private tableDataService: TableDataService,
              private authService: AuthService,
              private pdfService: AttachmentsService,
              private inboxService: InboxService,
              private routeService: RouteService,
              private router: Router,
              private dialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private encryptDecryptService: EncryptDecryptService) {
    this.store.dispatch(loadGetRequestCustomerTypes());
    this.store.dispatch(loadCustomerIdTypes());
    this.tableDataService.getSearchRequestsTable();
    this.columns = this.tableDataService.tableColumns;
    this.displayedColumns = this.tableDataService.displayColumns;
  }

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
      this.dataSource.data = res?  res : [] ;
    });
    this.transactionCategories$.pipe(take(1))
      .subscribe(
        (transactions: []) => {
          if (transactions.length === 0) {
            this.store.dispatch(loadMainCategories());
          }
        }
      );

    this.searchForm.controls.customerIdTypeCode.valueChanges.subscribe(e => {
      this.updateProofNoMaxLength(e);
    })
    this.dataSource.paginator = this.paginator;
  }

  initForms = () => {

    this.searchForm = this.formBuilder.group({
      customerIdTypeCode: [],
      customerIdTypes: [],
      customerTypeCode: [],
      id: [],
      loginId: [],
      organizationUnitId: [],
      pageNo: [1],
      pageSize: [10],
      procurationSerial: [],
      procurationYear: [],
      qid: [],
      requestCustomerTypes: [],
      requestDateFrom: [],
      requestDateTo: [],
      requestNo: [],
      requestStatusId: [],
      transactionTypeId: [],
    });
  };

  updateProofNoMaxLength = (id) => {
    switch (id) {
      case 1:
      case 3:
        this.maxLength = 9;
        break;
      case 12:
      case 4:
      default:
        this.maxLength = 20;
        break;
      case 5:
        this.maxLength = 15;
        break;
      case 9:
        this.maxLength = 10;
        break;
      case 11:
        this.maxLength = 12;
        break;
      case 6:
        this.maxLength = 11;
        break;
    }
  };

  search = (searchObj) => {
    searchObj.requestDateTo = this.dateTo;
    searchObj.requestDateFrom = this.dateFrom;
    this.searchObj = Object.assign({}, this.searchObj, {
      data: { ...searchObj }
    });
    this.inboxService.searchOSSCompletedRequest(this.searchObj).subscribe((response: any) => {
      this.dataSource.data = response.data.searchResults.ossCompletedRequests.results? response.data.searchResults.ossCompletedRequests.results : [];
    });
  };

  onChangesFromDate = (event: any) => {
    this.dateFrom = {
      day: `${event.value._i.date}`,
      month: `${event.value._i.month + 1}`,
      year: `${event.value._i.year}`
    };
  };

  onChangesToDate = (event: any) => {
    this.dateTo = {
      day: `${event.value._i.date}`,
      month: `${event.value._i.month + 1}`,
      year: `${event.value._i.year}`
    };
  };

  mo7rrReview = (requestId) => {
    const params = {x__RepName: 'POA_REPORT',
      p___REQUEST_ID: this.encryptDecryptService.encryptUsingAES256(`${requestId}`),
      xat: this.authService.getToken()};
    this.pdfService.mo7rrView(params);
  };

  attachmentsView = (id) => {
    this.store.dispatch(GetRequestDetails( {requestId: id}));
    const dialogRef = this.dialog.open(RequestAttachmentsModalComponent, {
      width: '850px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  };

  routeToRequest = (requestType, requestId) => {
    this.routeService.route(requestType, requestId);
  };

  clearForm = () => {
    this.searchForm.reset();
  };
}
