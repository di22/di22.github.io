import { Action, createReducer, on } from '@ngrx/store';
import * as TransactionCustTypeActions from '../actions/transaction-cust-type.actions';

export const transactionCustTypeFeatureKey = 'transactionCustType';

export interface State {
transactionCustomerTypes: [];
error: any;
}

export const initialState: State = {
  transactionCustomerTypes: [],
  error: null
};

const transactionCustTypeReducer = createReducer(
  initialState,

  on(TransactionCustTypeActions.loadTransactionCustTypesSuccess, (state, action) =>
    ({...state, transactionCustomerTypes: action.data, error: null})),
  on(TransactionCustTypeActions.loadTransactionCustTypesFailure, (state, action) =>
    ({...state, error: action.error, transactionCustomerTypes: []})),

);

export function reducer(state: State | undefined, action: Action) {
  return transactionCustTypeReducer(state, action);
}
