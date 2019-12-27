import { createAction, props } from '@ngrx/store';

export const loadCustomerIdTypes = createAction(
  '[CustomerIdType] Load CustomerIdTypes'
);

export const loadCustomerIdTypesSuccess = createAction(
  '[CustomerIdType] Load CustomerIdTypes Success',
  props<{ Id: any }>()
);

export const loadCustomerIdTypesFailure = createAction(
  '[CustomerIdType] Load CustomerIdTypes Failure',
  props<{ error: any }>()
);
