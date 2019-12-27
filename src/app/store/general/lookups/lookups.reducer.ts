import {Action, ActionReducer, combineReducers} from '@ngrx/store';
import * as fromRequestStatus from './request-status/reducers/request-status.reducer';
import {requestStatusFeatureKey} from './request-status/reducers/request-status.reducer';
import * as fromRequestType from './request-types/reducers/request-type.reducer';


export const lookupsFeatureKey = 'lookups';

export interface State {
  [fromRequestStatus.requestStatusFeatureKey]: fromRequestStatus.State;
  [fromRequestType.requestTypeFeatureKey]: fromRequestType.State;
}

export function reducer(state: State | undefined, action: Action) {
  return {
    requestStatus: fromRequestStatus.initialState,
    requestType: fromRequestType.initialState
  };
}
