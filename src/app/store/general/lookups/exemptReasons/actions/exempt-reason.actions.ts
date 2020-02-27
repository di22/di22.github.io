import { createAction, props } from '@ngrx/store';

export const loadExemptReasons = createAction(
  '[ExemptReason] Load ExemptReasons'
);

export const loadExemptReasonsSuccess = createAction(
  '[ExemptReason] Load ExemptReasons Success',
  props<{ exemptReasons: any }>()
);

export const loadExemptReasonsFailure = createAction(
  '[ExemptReason] Load ExemptReasons Failure',
  props<{ error: any }>()
);
