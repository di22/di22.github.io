import { Action, createReducer, on } from '@ngrx/store';
import * as fromMainCategories from './main-categories.actions';

export const mainCategoriesFeatureKey = 'mainCategories';

export interface State {
  transactions: any;
  error: any;
}

export const initialState: State = {
  transactions: null,
  error: null
};

const mainCategoriesReducer = createReducer(
  initialState,
on(fromMainCategories.loadMainCategories, state => ({...state})),
on(fromMainCategories.loadMainCategoriesSuccess, (state, action) => ({...state, transactions: action.transactions, error: null})),
on(fromMainCategories.loadMainCategoriesFailure, (state, action) => ({...state, error: action.error, transactions: []}))
);

export function reducer(state: State | undefined, action: Action) {
  return mainCategoriesReducer(state, action);
}
