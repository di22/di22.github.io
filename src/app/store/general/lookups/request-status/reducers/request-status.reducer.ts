import { Action, createReducer, on } from '@ngrx/store';
import * as RequestStatusActions from '../actions/request-status.actions';
import {RequestStatus} from '../../../../../DTO`s/request-status';

export const requestStatusFeatureKey = 'requestStatus';

export interface State {
requestStatuses: RequestStatus[];
error: any;
}

export const initialState: State = {
  requestStatuses: [],
  error: null
};

const requestStatusReducer = createReducer(
  initialState,

  on(RequestStatusActions.loadRequestStatuses, state => ({...state})),
  on(RequestStatusActions.loadRequestStatusesSuccess, (state, action) => ({...state, requestStatuses: action.requestStatues, error: null} )),
  on(RequestStatusActions.loadRequestStatuesesFailure, (state, action) => ({...state, requestStatuses: [], error: action.error})),

);

export function reducer(state: State | undefined, action: Action) {
  return requestStatusReducer(state, action);
}
