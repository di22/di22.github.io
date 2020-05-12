import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableDataService } from 'src/app/common/services/table-data.service';
import { FormControl } from '@angular/forms';
import { startWith, map, take } from 'rxjs/operators';
import { PaymentFeesService } from 'src/app/services/payment-fees.service';
import { MainCategoriesService } from 'src/app/services/main-categories.service';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store';
import {State} from '../../../store';
import {loadMainCategories} from '../../../store/general/categories/main-categories.actions';
import * as fromTransactionCategoriesSelector from '../../../store/general/categories/main-categories-selector';
import { TypeFess } from 'src/app/DTO`s/type-fess';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-fees-setting',
  templateUrl: './fees-setting.component.html',
  styleUrls: ['./fees-setting.component.scss']
})
export class FeesSettingComponent implements OnInit {
  
  transactionCategories$: Observable<any> = this.store.select(state => fromTransactionCategoriesSelector.selectCategories(state));
directions=["البوابه",
  "الدائره"
]
typeFees: FormControl = new FormControl('');
filteredOptions:Observable<any>

// displayedColumns: string[];
displayedColumns = ['name', 'requestId', 'requestType','partiesFeesValue','copyFeesValue','requestFeesValue', 'update', 'delete'
];
dataSource=new MatTableDataSource<TypeFess>();
@ViewChild(MatPaginator) paginator: MatPaginator;
// columns = [];
  constructor(private tableDataService:TableDataService,
              private paymentFessService:PaymentFeesService,
              private mainCategoryService:MainCategoriesService,
              private store: Store<State>){
    this.tableDataService.getFeesSettingTable();
    // this.columns=this.tableDataService.tableColumns;
    // this.displayedColumns=this.tableDataService.displayedColumns;
   }
  ngOnInit(): void {
    this.transactionCategories$.pipe(take(1))
    .subscribe(
      (transactions: []) => {
        if (transactions.length === 0) {
          this.store.dispatch(loadMainCategories());
         }
      }
    );
   

    this.getAllCategories();


    // this.typeFees.valueChanges.subscribe(value => {
    //   if (value && typeof value === 'object' && value.constructor === Object) {
    //   this.institutionId = value.InstitutionId;
    //   this.lawOfficeName = value.InstitutionName;
    //   this.store.dispatch(loadLawers({resourc_id: 'T2ZmaWNlc0xhd3llcg==', InstitutionId: window.btoa(`?q=InstitutionId=${value.InstitutionId}`)}));
    //   }
    // });

  }
  

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getAllCategories()
  {
    this.paymentFessService.getAllCategories().subscribe((response: any) =>{
      this.dataSource.data = response.data.transactionPaymentFees;
     
  });
  }
  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  getDisplayFn(transaction): string {
    return transaction && transaction.description ? transaction.description : '';
  }
}
