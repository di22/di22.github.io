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

export const selectExpiryDate = createSelector(
  selectAllRequestDebaga,
  (requestDebaga) => requestDebaga.find(rd => rd.debagaTemplate.id === 8771)
);

export const selectDebagaFees = createSelector(
  selectRequestDebagaState,
  (state: fromRequestDebaga.State) => state.fees
);
