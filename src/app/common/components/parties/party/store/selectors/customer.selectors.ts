import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomer from '../reducers/customer.reducer';

export const selectCustomerState = createFeatureSelector<fromCustomer.State>(
  fromCustomer.customerFeatureKey
);

export const selectUserEntities = createSelector(
  selectCustomerState,
  fromCustomer.selectAll
);

export const selectRequester = createSelector(
  selectCustomerState,
  customerState => {
    return Object.values(customerState.entities).some((e: any) => e.requesterFlag)
  }
);

export const selectROPCustomer = createSelector(
  selectCustomerState,
  (state: fromCustomer.State) => state.ROPCustomer
);
