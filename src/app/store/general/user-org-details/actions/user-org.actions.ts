import { createAction, props } from '@ngrx/store';

export const loadUserDetails = createAction(
  '[UserOrg] Load UserDetails',
  props<{ userId: number }>()
);

export const loadUserDetailsSuccess = createAction(
  '[UserOrg] Load UserDetailsSuccess',
  props<{ user: any }>()
);

export const loadUserOrgsSuccess = createAction(
  '[UserOrg] Load UserOrgs Success',
  props<{ data: any }>()
);

export const loadUserOrgsFailure = createAction(
  '[UserOrg] Load UserOrgs Failure',
  props<{ error: any }>()
);
