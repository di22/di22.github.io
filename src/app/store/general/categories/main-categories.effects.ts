import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {loadMainCategories, loadMainCategoriesFailure, loadMainCategoriesSuccess} from './main-categories.actions';
import {catchError, concatMap, map, mergeMap} from 'rxjs/operators';
import {MainCategoriesService} from '../../../services/main-categories.service';
import {of} from 'rxjs';



@Injectable()
export class MainCategoriesEffects {
  getTransactionCategories$ = createEffect(() =>
  this.actions$.pipe(ofType(loadMainCategories),
    concatMap(() =>
    this.mainCategoriesService.getTransactions().pipe(
      map((transactions: any) => this.mainCategoriesService.flatTransactions(transactions.data.lookupList)),
      map(transactions => loadMainCategoriesSuccess({transactions})),
      catchError(error => of(loadMainCategoriesFailure({error})))
    ))));


  constructor(private actions$: Actions,
              private mainCategoriesService: MainCategoriesService) {}

}
