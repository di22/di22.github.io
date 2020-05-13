import { createAction, props } from '@ngrx/store';
import {RequestDebaga} from '../request-debaga.model';
import {Update} from '@ngrx/entity';

export const loadRequestDebagas = createAction(
  '[RequestDebaga] Load RequestDebagas',
  props<{ data: any }>()
);

export const loadRequestDebagasSuccess = createAction(
  '[RequestDebaga] Load RequestDebagas Success',
  props<{ data: any }>()
);

export const loadRequestDebagasFailure = createAction(
  '[RequestDebaga] Load RequestDebagas Failure',
  props<{ error: any }>()
);


export const addRequestDebaga = createAction(
  '[AddRequestDebaga/API] Add RequestDebaga',
  props<{ requestDebaga: any }>()
);

export const addRequestDebagaSuccess = createAction(
  '[RequestDebagaSuccess] Add RequestDebaga Success',
  props<{ requestDebaga: any }>()
);

export const addDebaga = createAction(
  '[AddDebaga/API] Add Debaga',
  props<{ debaga: any }>()
);

export const addDebagaSuccess = createAction(
  '[AddDebagaSuccess/API] Add Debaga Success',
  props<{ debaga: any }>()
);

export const upsertRequestDebaga = createAction(
  '[RequestDebaga/API] Upsert RequestDebaga',
  props<{ requestDebaga: RequestDebaga }>()
);

export const addRequestDebagas = createAction(
  '[RequestDebaga/API] Add RequestDebagas',
  props<{ requestDebagas: RequestDebaga[] }>()
);

export const upsertRequestDebagas = createAction(
  '[RequestDebaga/API] Upsert RequestDebagas',
  props<{ requestDebagas: RequestDebaga[] }>()
);

export const updateRequestDebaga = createAction(
  '[UpdateRequestDebaga/API] Update RequestDebaga',
  props<{ requestDebaga: any }>()
);

export const updateRequestDebagaByGroup = createAction(
  '[UpdateRequestDebagaByGroup/API] Update RequestDebagaByGroup',
  props<{ requestDebaga: any }>()
);

export const updateDebaga = createAction(
  '[UpdateDebaga/API] Update Debaga',
  props<{ debaga: any }>()
);

export const updateRequestDebagaSuccess = createAction(
  '[UpdateRequestDebaga] Update RequestDebaga Success',
  props<{ requestDebaga: Update<RequestDebaga> }>()
);

export const updateRequestDebagas = createAction(
  '[RequestDebaga/API] Update RequestDebagas',
  props<{ requestDebagas: Update<RequestDebaga>[] }>()
);

export const deleteRequestDebaga = createAction(
  '[DeleteRequestDebaga/API] Delete RequestDebaga',
  props<{ id: any }>()
);

export const deleteRequestDebagaSuccess = createAction(
  '[DeleteRequestDebaga] Delete RequestDebagas Success',
  props<{ id: string }>()
);

export const deleteRequestDebagas = createAction(
  '[RequestDebaga/API] Delete RequestDebagas',
  props<{ ids: string[] }>()
);

export const ResetRequestDebagas = createAction(
  '[RequestDebaga/API] Reset RequestDebagas'
);

export const ResetDebagas = createAction(
  '[RequestDebaga/API] Reset Debagas'
);

