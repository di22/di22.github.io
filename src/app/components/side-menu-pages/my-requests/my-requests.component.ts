import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TableDataService} from '../../../common/services/table-data.service';
import {AuthService} from '../../../auth/services/auth.service';
import {RouteService} from '../../../services/route.service';
import {InboxService} from '../../../services/inbox.service';
import {Observable} from 'rxjs';
import * as fromTransactionCategoriesSelector from '../../../store/general/categories/main-categories-selector';
import {Store} from '@ngrx/store';
import {State} from '../../../store';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {loadMainCategories} from '../../../store/general/categories/main-categories.actions';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss'],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'ar-AR'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}]
})
export class MyRequestsComponent implements OnInit {

  user: any;
  searchObj: any = {data: {}};
  dateFrom: any;
  dateTo: {};
  displayedColumns: string[];
  columns = [];
  size: number;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource<any>();
  searchForm: FormGroup;

  transactionCategories$: Observable<any> = this.store.select(state => fromTransactionCategoriesSelector.selectCategories(state));
  constructor(private store: Store<State>,
              private tableDataService: TableDataService,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private routeService: RouteService,
              private inboxService: InboxService) {
    this.tableDataService.getMyRequestsTable();
    this.columns = this.tableDataService.tableColumns;
    this.displayedColumns = this.tableDataService.displayColumns;
  }

  ngOnInit(): void {
    this.initForms();
    this.store.dispatch(loadMainCategories());
    this.search(this.searchForm.value);
    this.dataSource.paginator = this.paginator;
  }
  initForms = () => {
    this.searchForm = this.formBuilder.group({
      id: [],
      loginId: [],
      requestDateFrom: [],
      requestDateTo: [],
      requestStatusId: [],
      transactionTypeId: [],
      requestNo: [],
      pageNo: [1],
      pageSize: [1000000000],
    });
  };
  search = (searchObj) => {
    searchObj.requestDateTo = this.dateTo;
    searchObj.requestDateFrom = this.dateFrom;
    this.searchObj = Object.assign({}, this.searchObj, {
      data: { ...searchObj }
    });
    this.inboxService.searchOSsDraftRequest(this.searchObj).subscribe((res: any) => {
      this.dataSource.data = res.data.searchResults.ossNoneCompletedRequests?.results? res.data.searchResults.ossNoneCompletedRequests?.results : [];
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
  routeToRequest = (requestType, requestId) => {
    this.routeService.route(requestType, requestId);
  };
  onPageChange(e) {
    this.size = e.pageSize;
   // this.page = e.pageIndex;
    this.searchForm.controls.pageNo.patchValue(e.pageIndex + 1);
   // this.searchForm.controls.pageSize.patchValue(e.pageSize);
    this.search(this.searchForm.value);
  }
  clearForm = () => {
    this.searchForm.reset();
  }
}
