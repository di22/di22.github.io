import { Action, createReducer, on } from '@ngrx/store';
import * as RelativesActions from '../actions/relatives.actions';
import {Relative} from '../../../../../DTO`s/relative';

export const relativesFeatureKey = 'relatives';

export interface State {
relatives: Relative[];
error: any;
}

export const initialState: State = {
  relatives: [],
  error: null
};

const relativesReducer = createReducer(
  initialState,

  on(RelativesActions.loadRelatives, state => state),
  on(RelativesActions.loadRelativesSuccess, (state, action) => ({state, relatives: action.data, error: null})),
  on(RelativesActions.loadRelativesFailure, (state, action) => ({state, relatives: [], error: action.error})),

);

export function reducer(state: State | undefined, action: Action) {
  return relativesReducer(state, action);
}
