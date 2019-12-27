import { createAction, props } from '@ngrx/store';

export const loadAuth = createAction(
  '[Auth] Load Auth',
  props<{ userName: string; password: string }>()
);

export const loadAuthSuccess = createAction(
  '[Auth] Load Auth Success',
  props<{ user: any }>()
);

export const loadAuthFailure = createAction(
  '[Auth] Load Auth Failure',
  props<{ error: any }>()
);
export const logout = createAction(
  '[Auth] Logout',
  props<{ }>()
);
