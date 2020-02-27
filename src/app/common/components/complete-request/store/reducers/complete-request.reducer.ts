import { Action, createReducer, on } from '@ngrx/store';
import * as CompleteRequestActions from '../actions/complete-request.actions';

export const completeRequestFeatureKey = 'completeRequest';

export interface State {
  invoice: any;
  error: any;

}

export const initialState: State = {
  invoice: null,
  error: null
};

const completeRequestReducer = createReducer(
  initialState,

  on(CompleteRequestActions.loadCompleteRequests, state => state),
  on(CompleteRequestActions.loadCompleteRequestsSuccess, (state, action) => state),
  on(CompleteRequestActions.invoiceEstimationSuccess, (state, action) => ({...state, invoice: action.invoice, error: null})),
  on(CompleteRequestActions.loadCompleteRequestsFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return completeRequestReducer(state, action);
}
