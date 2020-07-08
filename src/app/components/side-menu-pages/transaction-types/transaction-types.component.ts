import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../../auth/services/auth.service';
import {RouteService} from '../../../services/route.service';
import {Store} from '@ngrx/store';
import {State} from '../../../store';
import {Observable} from 'rxjs';
import * as fromTransactionCategoriesSelector from '../../../store/general/categories/main-categories-selector';
import {take} from 'rxjs/operators';
import {loadMainCategories} from '../../../store/general/categories/main-categories.actions';
import {RequestCustomerType} from '../../../DTO`s/request-customer-type';
import * as fromRequestCustomerTypes
  from '../../../store/general/lookups/request-custiomer-types/reducers/get-request-customer-type.reducer';
import {loadGetRequestCustomerTypes} from '../../../store/general/lookups/request-custiomer-types/actions/get-request-customer-type.actions';

@Component({
  selector: 'app-transaction-types',
  templateUrl: './transaction-types.component.html',
  styleUrls: ['./transaction-types.component.scss']
})
export class TransactionTypesComponent implements OnInit {
  parties: string[] = ['الطرف الأول', 'الطرف الثاني', 'الطرف الثالث'];
  transactionsForm: FormGroup;
  custPartiesForm: FormGroup;
  transactionCategories$: Observable<any> = this.store.select(state => fromTransactionCategoriesSelector.selectCategories(state));
  requestCustomerTypes$: Observable<RequestCustomerType[]> = this.store.select(state => state[fromRequestCustomerTypes.getRequestCustomerTypeFeatureKey].types);

  constructor(private store: Store<State>,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private routeService: RouteService) {
    this.store.dispatch(loadGetRequestCustomerTypes());
    this.initForms();
    this.parties.forEach(e => {
      this.addParty();
    });
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
  }
  initForms = () => {
    this.transactionsForm = this.formBuilder.group({
      transactionId: [],
      accessFromMobile: [],
      accessFromOss: [],
      accessFromPortal: [],
      approveFirstParty: [],
      approveSecondParty: [],
      canIssueFromOss: [],
      expirationPeriod: [],
      expirationPeriodCount: [],
      percent: [],
      percentField: [],
      showFirstClassRelation: [],
      showFourthClassRelation: [],
      showSecondClassRelation: [],
      showThirdClassRelation: []
    });

    this.custPartiesForm = this.formBuilder.group({
      custTypes: this.formBuilder.array([])
    });
  };
  save = (value) => {

  };
  addParty() {
    const party = this.custPartiesForm.controls.custTypes as FormArray;
    party.push(this.formBuilder.group({
      custTypeId: '',
      partyId: '',
      transactionId: ''
    }));
  }
  get castParties () { return this.custPartiesForm.controls.custTypes as FormArray;}
  getDisplayFn = (transaction): string =>  transaction && transaction.description ? transaction.description : '';

}
