import { Action, createReducer, on } from '@ngrx/store';
import * as AdminTypeActions from '../actions/admin-type.actions';
import {AdminTypes} from '../../../../../DTO`s/admin-types';

export const adminTypeFeatureKey = 'adminType';

export interface State {
  types: AdminTypes[];
  error: any;

}

export const initialState: State = {
  types: [],
  error: null
};

const adminTypeReducer = createReducer(
  initialState,

  on(AdminTypeActions.loadAdminTypes, state => state),
  on(AdminTypeActions.loadAdminTypesSuccess, (state, action) => ({state, types: action.types, error: null})),
  on(AdminTypeActions.loadAdminTypesFailure, (state, action) => ({state, error: action.error, types: []})),

);

export function reducer(state: State | undefined, action: Action) {
  return adminTypeReducer(state, action);
}
