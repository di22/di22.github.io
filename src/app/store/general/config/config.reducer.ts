import { Action, createReducer, on } from '@ngrx/store';
import * as config from './config.actions';

export const configKey = 'config';

export interface State {
  relative: any;
  transaction: any;
  expiryDate: any;
  transactionID: number;
}

export const initialState: State = {
relative: '',
  transaction: '',
  expiryDate: '',
  transactionID: 0
};

const configReducer = createReducer(
  initialState,
on(config.SetRelative, (state, action) => ({state: state, relative: action.relative, transaction: state.transaction, expiryDate: state.expiryDate, transactionID: state.transactionID})),
on(config.SetTransaction, (state, action) => ({state: state, transaction: action.transaction, relative: state.relative, expiryDate: state.expiryDate, transactionID: state.transactionID})),
on(config.SetExpiryDate, (state, action) => ({state: state, expiryDate: action.date, relative: state.relative, transaction: state.transaction, transactionID: state.transactionID})),
on(config.SetTransactionId, (state, action) => ({state: state, transactionID: action.Id, relative: state.relative, transaction: state.transaction, expiryDate: state.expiryDate}))
);

export function reducer(state: State | undefined, action: Action) {
  return configReducer(state, action);
}
