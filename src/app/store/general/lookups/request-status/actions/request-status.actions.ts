import { createAction, props } from '@ngrx/store';
import {RequestStatus} from '../../../../../DTO`s/request-status';

export const loadRequestStatuses = createAction(
  '[RequestStatus] Load RequestStatuses',
  props<{}>()
);

export const loadRequestStatusesSuccess = createAction(
  '[RequestStatus] Load RequestStatuses Success',
  props<{ requestStatues: RequestStatus[] }>()
);

export const loadRequestStatuesesFailure = createAction(
  '[RequestStatus] Load RequestStatuses Failure',
  props<{ error: any }>()
);
