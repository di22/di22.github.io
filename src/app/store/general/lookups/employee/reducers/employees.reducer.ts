import { Action, createReducer, on } from '@ngrx/store';
import * as EmployeesActions from '../actions/employees.actions';
import {Employee} from '../../../../../DTO`s/employee';

export const employeesFeatureKey = 'employees';

export interface State {
employees: Employee[];
error: any;
}

export const initialState: State = {
  employees: [],
  error: null
  };

const employeesReducer = createReducer(
  initialState,

  on(EmployeesActions.loadEmployees, state => state),
  on(EmployeesActions.loadEmployeesSuccess, (state, action) => ({state, employees: action.employees, error: null})),
  on(EmployeesActions.loadEmployeesFailure, (state, action) => ({state, error: action.error, employees: []})),

);

export function reducer(state: State | undefined, action: Action) {
  return employeesReducer(state, action);
}
