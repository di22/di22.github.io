import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRequestDebaga from '../reducers/request-debaga.reducer';

export const selectRequestDebagaState = createFeatureSelector<fromRequestDebaga.State>(
  fromRequestDebaga.requestDebagaFeatureKey
);

export const selectAllRequestDebaga = createSelector (
  selectRequestDebagaState,
    fromRequestDebaga.selectAll
);

export const selectDebaga = createSelector(
  selectRequestDebagaState,
  (state: fromRequestDebaga.State) => state.debagaText
);
