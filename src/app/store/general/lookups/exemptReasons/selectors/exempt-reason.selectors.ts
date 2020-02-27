import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromExemptReason from '../reducers/exempt-reason.reducer';

export const selectExemptReasonState = createFeatureSelector<fromExemptReason.State>(
  fromExemptReason.exemptReasonFeatureKey
);

export const selectAllExemptReasons = createSelector(
  selectExemptReasonState,
  (state: fromExemptReason.State) => state.exemptReasons
);
