import { createAction, props } from '@ngrx/store';

export const loadCompleteRequests = createAction(
  '[CompleteRequest] Load CompleteRequests'
);

export const loadCompleteRequestsSuccess = createAction(
  '[CompleteRequest] Load CompleteRequests Success',
  props<{ data: any }>()
);

export const loadCompleteRequestsFailure = createAction(
  '[CompleteRequest] Load CompleteRequests Failure',
  props<{ error: any }>()
);

export const invoiceEstimation = createAction(
  '[CompleteRequest] invoiceEstimation',
  props<{ invoice: any }>()
);

export const invoiceEstimationSuccess = createAction(
  '[CompleteRequest] invoiceEstimation Success',
  props<{ invoice: any }>()
);
