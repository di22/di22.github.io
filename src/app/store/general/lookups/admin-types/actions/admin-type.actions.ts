import { createAction, props } from '@ngrx/store';
import {AdminTypes} from '../../../../../DTO`s/admin-types';

export const loadAdminTypes = createAction(
  '[AdminType] Load AdminTypes'
);

export const loadAdminTypesSuccess = createAction(
  '[AdminType] Load AdminTypes Success',
  props<{ types: AdminTypes[] }>()
);

export const loadAdminTypesFailure = createAction(
  '[AdminType] Load AdminTypes Failure',
  props<{ error: any }>()
);
