import { createAction, props } from '@ngrx/store';

export const loadRelatives = createAction(
  '[Relatives] Load Relatives',
  props<{transactionId: any}>()
);

export const loadRelativesSuccess = createAction(
  '[Relatives] Load Relatives Success',
  props<{ data: any }>()
);

export const loadRelativesFailure = createAction(
  '[Relatives] Load Relatives Failure',
  props<{ error: any }>()
);
