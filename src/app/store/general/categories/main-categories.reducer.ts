import { Action, createReducer, on } from '@ngrx/store';
import * as fromMainCategories from './main-categories.actions';

export const mainCategoriesFeatureKey = 'mainCategories';

export interface State {
  transactions: any;
  selectedID: number;
  error: any;
}

export const initialState: State = {
  transactions: [],
  selectedID: 1,
  error: null
};

const mainCategoriesReducer = createReducer(
  initialState,
on(fromMainCategories.loadMainCategories, state => state),
on(fromMainCategories.GetSelectedCategory, (state, action) =>
  ({...state, selectedID: action.id, error: null, transactions: state.transactions})),
on(fromMainCategories.loadMainCategoriesSuccess, (state, action) =>
  ({...state, transactions: action.transactions, error: null, selectedID: state.selectedID})),
on(fromMainCategories.loadMainCategoriesFailure, (state, action) => ({...state, error: action.error, transactions: []}))
);

export function reducer(state: State | undefined, action: Action) {
  return mainCategoriesReducer(state, action);
}
