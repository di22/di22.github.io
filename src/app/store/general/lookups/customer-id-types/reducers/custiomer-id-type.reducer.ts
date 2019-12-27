import { Action, createReducer, on } from '@ngrx/store';
import * as CustomerIdTypeActions from '../actions/custiomer-id-type.actions';
import {CustomerIdType} from '../../../../../DTO`s/customer-id-type';

export const customerIdTypeFeatureKey = 'customerIdType';

export interface State {
  Id: CustomerIdType[];
  error: any;

}

export const initialState: State = {
  Id: [],
  error: null
};

const customerIdTypeReducer = createReducer(
  initialState,

  on(CustomerIdTypeActions.loadCustomerIdTypes, state => state),
  on(CustomerIdTypeActions.loadCustomerIdTypesSuccess, (state, action) => ({state, Id: action.Id, error: null})),
  on(CustomerIdTypeActions.loadCustomerIdTypesFailure, (state, action) => ({state, error: action.error, Id: []})),
);

export function reducer(state: State | undefined, action: Action) {
  return customerIdTypeReducer(state, action);
}
