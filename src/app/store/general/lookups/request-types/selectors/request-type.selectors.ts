import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRequestType from '../reducers/request-type.reducer';

export const selectRequestTypeState = createFeatureSelector<fromRequestType.State>(
  fromRequestType.requestTypeFeatureKey
);
