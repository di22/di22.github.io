import { Action, createReducer, on } from '@ngrx/store';
import * as UserOrgActions from '../actions/user-org.actions';

export const userOrgFeatureKey = 'userOrg';

export interface State {
userDetails: any;
}

export const initialState: State = {
  userDetails: null
};

const userOrgReducer = createReducer(
  initialState,

  on(UserOrgActions.loadUserDetailsSuccess, (state, action) => ({...state, userDetails: action.user})),
  on(UserOrgActions.loadUserOrgsSuccess, (state, action) => state),
  on(UserOrgActions.loadUserOrgsFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return userOrgReducer(state, action);
}
