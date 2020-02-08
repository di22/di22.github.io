import { createAction, props } from '@ngrx/store';

export const loadLawOffices = createAction(
  '[LawOffice] Load LawOffices',
  props<{resourc_id: any}>()
);

export const loadLawOfficesSuccess = createAction(
  '[LawOffice] Load LawOffices Success',
  props<{ data: any }>()
);

export const loadLawers = createAction(
  '[LawOffice] Load Lawers',
  props<{resourc_id: any, InstitutionId?: any}>()
);

export const loadLawersSuccess = createAction(
  '[LawOffice] Load Lawers Success',
  props<{ data: any }>()
);

export const loadLawOfficesFailure = createAction(
  '[LawOffice] Load LawOffices Failure',
  props<{ error: any }>()
);
