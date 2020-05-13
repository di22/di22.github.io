import { createAction, props } from '@ngrx/store';
import {Request} from '../../../../../DTO`s/request';

export const CreateRequest = createAction(
  '[Request] Create Request',
  props<{request: any}>()
);

export const GetRequestDetails = createAction(
  '[Request] Get Request Details',
  props<{requestId: any}>()
);

export const GetRequestDetailsSuccess = createAction(
  '[Request] Get Request Details Success',
  props<{request: any}>()
);

export const CreateRequestsSuccess = createAction(
  '[Request] Create Request Success',
  props<{ request: Request }>()
);

export const CreateRequestsFailure = createAction(
  '[Request] Create Request Failure',
  props<{ error: any }>()
);

export const ResetRequests = createAction(
  '[Request] Reset Request'
);
