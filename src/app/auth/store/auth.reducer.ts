import { Action, createReducer, on } from '@ngrx/store';
import * as authActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  token: string;
  user: any;
  authenticated: boolean;
  error: any;
}

export const initialState: State = {
  token: null,
  user: null,
  authenticated: false,
  error: null
};

const authReducer = createReducer(
  initialState,
 // on(authActions.loadAuth, state => ({...state})),
  on(authActions.loadAuthFailure, (state, action) => ({ ...state, authenticated: false, error: action.error })),
  on(authActions.loadAuthSuccess, (state, {user}) => ({...state, token: user.data.authToken, user: user.data.user, authenticated: true})),
  on(authActions.logout, (state) => ({...state, token: null, user: null, authenticated: false}))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
