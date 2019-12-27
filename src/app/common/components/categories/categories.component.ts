import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import * as fromTransactionCategories from '../../../store/general/categories/main-categories.reducer';
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
  transactionState: Observable<fromTransactionCategories.State>;
  transactionCategories$: Observable<any> = this.store.select(state =>
    state[fromTransactionCategories.mainCategoriesFeatureKey].transactions);
  url: string;
  constructor(private store: Store<State>,
              private router: Router) {}

  ngOnInit() {
    this.transactionState = this.store.select('mainCategories');

    this.store.select(state => state[mainCategoriesFeatureKey].transactions).pipe(take(1))
      .subscribe(
        (transactions: any) => {
          if (!transactions) {
            this.store.dispatch(loadMainCategories({}));
          }
        }
      );
  }
  routeToSubCategories = (descriptionEn) => {
    this.router.navigateByUrl(`../${descriptionEn}`);
  }

  drop(event: CdkDragDrop<any[]>, array) {
    moveItemInArray(array, event.previousIndex, event.currentIndex);
  }

}
