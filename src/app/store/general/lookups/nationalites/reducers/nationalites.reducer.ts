import { Action, createReducer, on } from '@ngrx/store';
import * as NationalitesActions from '../actions/nationalites.actions';
import {Nationality} from '../../../../../DTO`s/nationality';

export const nationalitiesFeatureKey = 'nationalities';

export interface State {
  nationalities: Nationality[];
  error: any;
}

export const initialState: State = {
  nationalities: [],
  error: null
};

const nationalitiesReducer = createReducer(
  initialState,

  on(NationalitesActions.loadNationalities, state => state),
  on(NationalitesActions.loadNationalitiesSuccess, (state, action) => ({state, nationalities: action.nationalities, error: null})),
  on(NationalitesActions.loadNationalitiesFailure, (state, action) => ({state, nationalities: [], error: action.error})),

);

export function reducer(state: State | undefined, action: Action) {
  return nationalitiesReducer(state, action);
}
