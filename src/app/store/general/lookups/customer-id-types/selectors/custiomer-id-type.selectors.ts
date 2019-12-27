import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomerIdType from '../reducers/custiomer-id-type.reducer';

export const selectCustomerIdTypeState = createFeatureSelector<fromCustomerIdType.State>(
  fromCustomerIdType.customerIdTypeFeatureKey
);
