import { Action, createReducer, on } from '@ngrx/store';
import * as GetRequestCustomerTypeActions from '../actions/get-request-customer-type.actions';
import {RequestCustomerType} from '../../../../../DTO`s/request-customer-type';

export const getRequestCustomerTypeFeatureKey = 'getRequestCustomerType';

export interface State {
  types: RequestCustomerType[];
  error: any;

}

export const initialState: State = {
  types: [],
  error: null
};

const getRequestCustomerTypeReducer = createReducer(
  initialState,

  on(GetRequestCustomerTypeActions.loadGetRequestCustomerTypes, state => state),
  on(GetRequestCustomerTypeActions.loadGetRequestCustomerTypesSuccess, (state, action) => ({state, types: action.types, error: null})),
  on(GetRequestCustomerTypeActions.loadGetRequestCustomerTypesFailure, (state, action) => ({state, error: action.error, types: []})),

);

export function reducer(state: State | undefined, action: Action) {
  return getRequestCustomerTypeReducer(state, action);
}
