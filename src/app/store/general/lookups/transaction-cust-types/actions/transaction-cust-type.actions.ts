import { createAction, props } from '@ngrx/store';

export const loadTransactionCustTypes = createAction(
  '[TransactionCustType] Load TransactionCustTypes',
  props<{ id: any }>()
);

export const loadTransactionCustTypesSuccess = createAction(
  '[TransactionCustType] Load TransactionCustTypes Success',
  props<{ data: any }>()
);

export const loadTransactionCustTypesFailure = createAction(
  '[TransactionCustType] Load TransactionCustTypes Failure',
  props<{ error: any }>()
);
