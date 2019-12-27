import { createAction, props } from '@ngrx/store';
import {Nationality} from '../../../../../DTO`s/nationality';

export const loadNationalities = createAction(
  '[Nationalities] Load Nationalities'
);

export const loadNationalitiesSuccess = createAction(
  '[Nationalities] Load Nationalities Success',
  props<{ nationalities: Nationality[] }>()
);

export const loadNationalitiesFailure = createAction(
  '[Nationalities] Load Nationalities Failure',
  props<{ error: any }>()
);
