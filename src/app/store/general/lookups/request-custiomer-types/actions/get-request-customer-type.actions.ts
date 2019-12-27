import { createAction, props } from '@ngrx/store';

export const loadGetRequestCustomerTypes = createAction(
  '[GetRequestCustomerType] Load GetRequestCustomerTypes'
);

export const loadGetRequestCustomerTypesSuccess = createAction(
  '[GetRequestCustomerType] Load GetRequestCustomerTypes Success',
  props<{ types: any }>()
);

export const loadGetRequestCustomerTypesFailure = createAction(
  '[GetRequestCustomerType] Load GetRequestCustomerTypes Failure',
  props<{ error: any }>()
);
