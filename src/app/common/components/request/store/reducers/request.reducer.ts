import { Action, createReducer, on } from '@ngrx/store';
import * as RequestActions from '../actions/request.actions';

export const requestFeatureKey = 'request';

export interface State {
  request: any;
  requestId: number;
  error: any;
}

export const initialState: State = {
  request: {},
  requestId: 0,
  error: ''
};

const requestReducer = createReducer(
  initialState,

  on(RequestActions.CreateRequest, state => state),
  on(RequestActions.CreateRequestsSuccess, (state, action) => ({state, request: action.request, requestId: state.requestId, error: null})),
  on(RequestActions.GetRequestDetailsSuccess, (state, action) => ({state, request: action.request, requestId: state.requestId, error: null})),
  on(RequestActions.GetRequestDetails, (state, action) => ({state, request: state.request, requestId: action.requestId, error: null})),
  on(RequestActions.CreateRequestsFailure, (state, action) => ({state, error: action.error, requestId: state.requestId, request: {}})),
  on(RequestActions.ResetRequests, (state) => ({state, error: '', requestId: 0, request: {}})),

);

export function reducer(state: State | undefined, action: Action) {
  return requestReducer(state, action);
}
