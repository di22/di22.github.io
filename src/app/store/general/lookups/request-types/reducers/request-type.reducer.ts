import { Action, createReducer, on } from '@ngrx/store';
import * as RequestTypeActions from '../actions/request-type.actions';
import {RequestType} from '../../../../../DTO`s/request-type';

export const requestTypeFeatureKey = 'requestType';

export interface State {
  RequestTypes: RequestType[];
  error: any;
}

export const initialState: State = {
  RequestTypes: [],
  error: null
};

const requestTypeReducer = createReducer(
  initialState,

  on(RequestTypeActions.loadRequestTypes, state => state),
  on(RequestTypeActions.loadRequestTypesSuccess, (state, action) => ({...state, RequestTypes: action.requestTypes, error: null})),
  on(RequestTypeActions.loadRequestTypesFailure, (state, action) => ({...state, error: action.error, RequestTypes: []})),

);

export function reducer(state: State | undefined, action: Action) {
  return requestTypeReducer(state, action);
}
