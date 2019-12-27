import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGetRequestCustomerType from '../reducers/get-request-customer-type.reducer';

export const selectGetRequestCustomerTypeState = createFeatureSelector<fromGetRequestCustomerType.State>(
  fromGetRequestCustomerType.getRequestCustomerTypeFeatureKey
);
