import { createAction, props } from '@ngrx/store';
import {Debaga} from '../debaga.model';
import {Update} from '@ngrx/entity';

export const loadDebagas = createAction(
  '[Debaga/API] Load Debagas',
  props<{ transactionId: number }>()
);

export const loadDebagasSuccess = createAction(
  '[Debaga/API] Load Debagas Success',
  props<{ debagas: Debaga[] }>()
);

export const loadDebagasFailure = createAction(
  '[Debaga/API] Load Debagas Failure',
  props<{ error: any }>()
);

export const addDebaga = createAction(
  '[Debaga/API] Add Debaga',
  props<{ debaga: any }>()
);

export const addDebagaSuccess = createAction(
  '[Debaga/API] Add Debaga Success',
  props<{ debaga: Debaga }>()
);

export const upsertDebaga = createAction(
  '[Debaga/API] Upsert Debaga',
  props<{ debaga: any }>()
);

export const upsertDebagaSuccess = createAction(
  '[Debaga/API] Upsert Debaga Success',
  props<{ debaga: Debaga }>()
);

export const addDebagas = createAction(
  '[Debaga/API] Add Debagas',
  props<{ debagas: Debaga[] }>()
);

export const upsertDebagas = createAction(
  '[Debaga/API] Upsert Debagas',
  props<{ debagas: Debaga[] }>()
);

export const updateDebaga = createAction(
  '[Debaga/API] Update Debaga',
  props<{ debaga: any }>()
);

export const updateDebagaSuccess = createAction(
  '[Debaga/API] Update Debaga Success',
  props<{ debaga: Update<Debaga> }>()
);

export const updateDebagas = createAction(
  '[Debaga/API] Update Debagas',
  props<{ debagas: Update<Debaga>[] }>()
);

export const deleteDebaga = createAction(
  '[Debaga/API] Delete Debaga',
  props<{ id: any }>()
);

export const deleteDebagaSuccess = createAction(
  '[Debaga/API] Delete Debaga Success',
  props<{ id: string }>()
);

export const deleteDebagas = createAction(
  '[Debaga/API] Delete Debagas',
  props<{ ids: string[] }>()
);

export const clearDebagas = createAction(
  '[Debaga/API] Clear Debagas'
);

