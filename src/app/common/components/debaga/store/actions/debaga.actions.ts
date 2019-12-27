import { createAction, props } from '@ngrx/store';
import {Debaga} from '../reducers/debaga.reducer';

export const createDebaga = createAction(
  '[Debaga] Create Debaga',
  props<{Debaga: any}>()
);

export const createDebagaSuccess = createAction(
  '[Debaga] Create Debaga Success',
  props<{Debaga: any}>()
);

export const upsertDebaga = createAction(
  '[Debaga/API] Upsert Debaga',
  props<{ Debaga: Debaga }>()
);

export const addDebaga = createAction(
  '[Debaga/API] Add Debaga',
  props<{ Debaga: Debaga[] }>()
);

export const upsertDebagas = createAction(
  '[Debaga/API] Upsert Debaga',
  props<{ Debaga: Debaga[] }>()
);

export const updateDebaga = createAction(
  '[Debaga/API] Update Debaga',
  props<{ Debaga: any}>()
);
export const updateDebagaSuccess = createAction(
  '[Debaga/API] Update Debaga Success',
  props<{ Debaga: Debaga }>()
);

export const clearDebaga = createAction(
  '[Debaga/API] Clear Debaga'
);

export const deleteDebaga = createAction(
  '[Debaga] Delete Debaga',
  props<{id: any}>()
);
export const deleteDebagaSuccess = createAction(
  '[Debaga] Delete Debaga Success',
  props<{id: number}>()
);

export const loadDebaga = createAction(
  '[Debaga] Load Debagas',
  props<{transactionId: number}>()
);

export const loadDebagaSuccess = createAction(
  '[Debaga] Load Debagas Success',
  props<{ debaga: any }>()
);

export const loadDebagaFailure = createAction(
  '[Debaga] Load Debagas Failure',
  props<{ error: any }>()
);
