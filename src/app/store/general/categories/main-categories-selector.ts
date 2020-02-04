import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCategories from './main-categories.reducer';

export const selectCategoryState = createFeatureSelector<fromCategories.State>(
  fromCategories.mainCategoriesFeatureKey
);

export const selectCategories = createSelector(
  selectCategoryState,
  (state: fromCategories.State) => state.transactions
);
