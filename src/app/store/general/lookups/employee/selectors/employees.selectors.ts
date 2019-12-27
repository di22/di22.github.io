import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEmployees from '../reducers/employees.reducer';

export const selectEmployeesState = createFeatureSelector<fromEmployees.State>(
  fromEmployees.employeesFeatureKey
);
