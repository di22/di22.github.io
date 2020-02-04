import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import * as fromTransactionCategories from '../../../store/general/categories/main-categories.reducer';
import * as fromTransactionCategoriesSelector from '../../../store/general/categories/main-categories-selector';
import {Store} from '@ngrx/store';
import {State} from '../../../store';
import {ActivatedRoute, Router} from '@angular/router';
import {mainCategoriesFeatureKey} from '../../../store/general/categories/main-categories.reducer';
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
              private router: Router,
              private activatedRout: ActivatedRoute) {}

  ngOnInit() {
     this.url = this.router.url.slice(this.router.url.lastIndexOf('/'), this.router.url.length).substr(1);
     this.routes = ['RealEstates'];
     this.appStore$ = this.store.select(state => state);

     this.transactionCategories$.pipe(take(1))
      .subscribe(
        (transactions: []) => {
         if (transactions.length === 0) {
    this.store.dispatch(loadMainCategories());
          }});
  }
  routeToSubCategories = (descriptionEn: string) => {
    if (this.routes.includes(descriptionEn)) {
      this.router.navigate([`${this.url}/${descriptionEn}`]);
    } else {
      this.router.navigate(['/' + descriptionEn]);
    }
  }

  drop(event: CdkDragDrop<any[]>, array) {
    moveItemInArray(array, event.previousIndex, event.currentIndex);
  }

}
