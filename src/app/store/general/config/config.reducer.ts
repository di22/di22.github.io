import { Action, createReducer, on } from '@ngrx/store';
import * as config from './config.actions';

export const configKey = 'config';

export interface State {
  relative: any;
  transaction: any;
  expiryDate: any;
  transactionID: number;
  requester: boolean;
}

export const initialState: State = {
relative: '',
  transaction: '',
  expiryDate: '',
  transactionID: 0,
  requester: false
};

const configReducer = createReducer(
  initialState,
on(config.SetRelative, (state, action) => ({state: state, relative: action.relative, transaction: state.transaction, expiryDate: state.expiryDate, transactionID: state.transactionID, requester: state.requester})),
on(config.SetTransaction, (state, action) => ({state: state, transaction: action.transaction, relative: state.relative, expiryDate: state.expiryDate, transactionID: state.transactionID, requester: state.requester})),
on(config.SetExpiryDate, (state, action) => ({state: state, expiryDate: action.date, relative: state.relative, transaction: state.transaction, transactionID: state.transactionID, requester: state.requester})),
on(config.SetTransactionId, (state, action) => ({state: state, transactionID: action.Id, relative: state.relative, transaction: state.transaction, expiryDate: state.expiryDate, requester: state.requester})),
on(config.SetRequester, (state, action) => ({state: state, requester: action.requester, relative: state.relative, transaction: state.transaction, expiryDate: state.expiryDate, transactionID: state.transactionID})),
on(config.ResetConfig, (state, action) => ({state: state, transactionID: initialState.transactionID, relative: initialState.relative, transaction: initialState.transaction, expiryDate: initialState.expiryDate, requester: initialState.requester}))
);

export function reducer(state: State | undefined, action: Action) {
  return configReducer(state, action);
}
