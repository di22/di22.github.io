import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCompleteRequest from '../reducers/complete-request.reducer';

export const selectCompleteRequestState = createFeatureSelector<fromCompleteRequest.State>(
  fromCompleteRequest.completeRequestFeatureKey
);

export const selectInvoice = createSelector(
  selectCompleteRequestState,
  (state: fromCompleteRequest.State) => state.invoice
);
