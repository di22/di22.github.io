import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import * as fromTransactionCategoriesSelector from '../../../store/general/categories/main-categories-selector';
import {Store} from '@ngrx/store';
import {State} from '../../../store';
import { Router} from '@angular/router';
import {take} from 'rxjs/operators';
import {loadMainCategories} from '../../../store/general/categories/main-categories.actions';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Input() parentId: number;
  appStore$: Observable<State>;
  transactionCategories$: Observable<any> = this.store.select(state => fromTransactionCategoriesSelector.selectCategories(state));
  url: string;
  routes = [];
  constructor(private store: Store<State>,
              private router: Router) {}

  ngOnInit() {
     this.url = this.router.url;
     this.routes = ['RealEstates'];
     this.appStore$ = this.store.select(state => state);

     this.transactionCategories$.pipe(take(1))
      .subscribe(
        (transactions: []) => {
         if (transactions.length === 0) {
    this.store.dispatch(loadMainCategories());
          }});
  }
  routeToSubCategories = (transaction: any) => {
    if (transaction && transaction.code) {
      this.router.navigate([`${this.url}/${transaction.code}`]);
    }
  }

  drop(event: CdkDragDrop<any[]>, array) {
    moveItemInArray(array, event.previousIndex, event.currentIndex);
  }

}
