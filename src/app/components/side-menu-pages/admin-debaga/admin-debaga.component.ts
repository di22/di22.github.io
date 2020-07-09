import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../../store';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import * as fromTransactionCategoriesSelectors from '../../../store/general/categories/main-categories-selector';
import * as fromDebagaSelectors from './store/selectors/debaga.selectors';
import {AdminDebagaService} from '../../../services/admin-debaga.service';
import {loadMainCategories} from '../../../store/general/categories/main-categories.actions';
import {loadDebagas} from './store/actions/debaga.actions';
import {take} from 'rxjs/operators';
import {NestedTreeControl} from '@angular/cdk/tree';

@Component({
  selector: 'app-admin-debaga',
  templateUrl: './admin-debaga.component.html',
  styleUrls: ['./admin-debaga.component.scss']
})
export class AdminDebagaComponent implements OnInit {

  adminDebagaForm: FormGroup;
  appStore$: Observable<fromApp.State>;
  transactionCategories$: Observable<any> = this.store.select(state => fromTransactionCategoriesSelectors.selectCategories(state));
  debagas$: Observable<any> = this.store.select(state => fromDebagaSelectors.selectDebagaEntities(state));
  htmlComponents$: Observable<any>;
  fieldType$: Observable<any>;
  dateTypes$: Observable<any>;
  displayedColumns: string[] = ['position', 'name', 'order', 'fieldType', 'fieldNature', 'cost', 'monthesExpire', 'debagaType', 'edit-delete'];

  treeControl = new NestedTreeControl<any>(node => node.children);

  constructor(private store: Store<fromApp.State>,
              private formBuilder: FormBuilder,
              private adminDebagaService: AdminDebagaService) { }

  ngOnInit() {
    this.initForms();
    this.htmlComponents$ = this.adminDebagaService.getHtmlComponents();
    this.fieldType$ = this.adminDebagaService.getHtmlComponents();
    this.dateTypes$ = this.adminDebagaService.getHtmlComponents();
    this.appStore$ = this.store.select(state => state);
    this.transactionCategories$.pipe(take(1))
      .subscribe((transactions: []) => {
          if (transactions.length === 0) {
            this.store.dispatch(loadMainCategories());
          }});
    this.adminDebagaForm.controls.transactionTypeId.valueChanges.subscribe(id => {
      this.getTransactionDebaga(id);
    });
  }

  initForms = () => {
    this.adminDebagaForm = this.formBuilder.group({
      debagaTemplateLuDTO: this.formBuilder.group({
        id: [],
        text: [],
        code: [],
        description: [],
        htmlComponentLu: this.formBuilder.group({
          id: [],
          sortOrder: []
        }),
        maxValue: [],
        cost: [],
        expiredMonths: [],
        minValue: [],
        classType: [],
        columnType: [],
        parentDebagaTemplate: [],
        staticTemplate: [],
        required: []
      }),
      transactionTypeId: [],
      sortOrder: []
    });
  }

  getTransactionDebaga = (transactionId) => {
    this.store.dispatch(loadDebagas({transactionId}));
  }
  addDebaga = () => {

  }

  fetchDebaga = (ele) => {

  }
  updateDebaga = () => {

  }

  deleteDebaga = (id) => {

  }

  AddTableDataLists = () => {

  }

  DeletTableDataLists = () => {

  }

  hasChildren = (_: number, node: any) => !!node.debagaTemplate.childDebagaTemplates && node.debagaTemplate.childDebagaTemplates.length > 0;
  clearForm = () => {
    this.adminDebagaForm.reset();
  }
}
