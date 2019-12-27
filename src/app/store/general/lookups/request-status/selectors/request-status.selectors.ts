import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRequestStatus from '../reducers/request-status.reducer';

export const selectRequestStatusState = createFeatureSelector<fromRequestStatus.State>(
  fromRequestStatus.requestStatusFeatureKey
);
