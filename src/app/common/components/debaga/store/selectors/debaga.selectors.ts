import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDebaga from '../reducers/debaga.reducer';

export const selectDebagaState = createFeatureSelector<fromDebaga.State>(
  fromDebaga.debagaFeatureKey
);

export const selectDebagaEntites = createSelector(
  selectDebagaState,
  fromDebaga.selectAll
);
