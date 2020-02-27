import { createAction, props } from '@ngrx/store';
import {Relative} from '../../../../../DTO`s/relative';

export const loadRelatives = createAction(
  '[Relatives] Load Relatives',
  props<{transactionId: any}>()
);

export const loadRelativesSuccess = createAction(
  '[Relatives] Load Relatives Success',
  props<{ data: Relative[] }>()
);

export const loadRelativesFailure = createAction(
  '[Relatives] Load Relatives Failure',
  props<{ error: any }>()
);
