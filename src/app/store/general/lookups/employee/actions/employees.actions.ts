import { createAction, props } from '@ngrx/store';
import {Employee} from '../../../../../DTO`s/employee';

export const loadEmployees = createAction(
  '[Employees] Load Employees',
  props<{}>()
);

export const loadEmployeesSuccess = createAction(
  '[Employees] Load Employees Success',
  props<{ employees: Employee[] }>()
);

export const loadEmployeesFailure = createAction(
  '[Employees] Load Employees Failure',
  props<{ error: any }>()
);
