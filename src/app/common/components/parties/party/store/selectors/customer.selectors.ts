import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomer from '../reducers/customer.reducer';

export const selectCustomerState = createFeatureSelector<fromCustomer.State>(
  fromCustomer.customerFeatureKey
);

export const selectUserEntities = createSelector(
  selectCustomerState,
  fromCustomer.selectAll
);

export const selectROPCustomer = createSelector(
  selectCustomerState,
  (state: fromCustomer.State) => state.ROPCustomer
);
