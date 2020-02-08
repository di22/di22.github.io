import { Action, createReducer, on } from '@ngrx/store';
import * as LawOfficeActions from '../actions/law-office.actions';

export const lawOfficeFeatureKey = 'lawOffice';

export interface State {
  offices: any[];
  lawers: any[];
}

export const initialState: State = {
  offices: [],
  lawers: []
};

const lawOfficeReducer = createReducer(
  initialState,

  on(LawOfficeActions.loadLawOffices, state => state),
  on(LawOfficeActions.loadLawOfficesSuccess, (state, action) => ({state, offices: action.data, lawers: []})),
  on(LawOfficeActions.loadLawOfficesFailure, (state, action) => ({state, offices: [], lawers: []})),
  on(LawOfficeActions.loadLawersSuccess, (state, action) => ({state, offices: state.offices, lawers: action.data})),

);

export function reducer(state: State | undefined, action: Action) {
  return lawOfficeReducer(state, action);
}
