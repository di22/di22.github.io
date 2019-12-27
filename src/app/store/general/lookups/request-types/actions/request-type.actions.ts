import { createAction, props } from '@ngrx/store';
import {RequestType} from '../../../../../DTO`s/request-type';

export const loadRequestTypes = createAction(
  '[RequestType] Load RequestTypes',
  props<{ }>()
);

export const loadRequestTypesSuccess = createAction(
  '[RequestType] Load RequestTypes Success',
  props<{ requestTypes: RequestType[] }>()
);

export const loadRequestTypesFailure = createAction(
  '[RequestType] Load RequestTypes Failure',
  props<{ error: any }>()
);
