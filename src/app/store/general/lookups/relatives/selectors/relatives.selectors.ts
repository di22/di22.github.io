import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRelatives from '../reducers/relatives.reducer';

export const selectRelativesState = createFeatureSelector<fromRelatives.State>(
  fromRelatives.relativesFeatureKey
);

export const relativesSelector = createSelector(
  selectRelativesState,
  (state: fromRelatives.State) => state.relatives
)
