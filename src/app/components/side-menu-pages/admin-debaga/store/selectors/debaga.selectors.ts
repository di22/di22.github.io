import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDebaga from '../reducers/debaga.reducer';

export const selectDebagaState = createFeatureSelector<fromDebaga.State>(
  fromDebaga.debagasFeatureKey
);

export const selectDebagaEntities = createSelector(
  selectDebagaState,
  fromDebaga.selectAll
);
