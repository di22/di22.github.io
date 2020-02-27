import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTransactionCustType from '../reducers/transaction-cust-type.reducer';

export const selectTransactionCustTypeState = createFeatureSelector<fromTransactionCustType.State>(
  fromTransactionCustType.transactionCustTypeFeatureKey
);

export const selectTranscationCustomerTypes = createSelector(
  selectTransactionCustTypeState,
  (state: fromTransactionCustType.State) => state.transactionCustomerTypes
)
