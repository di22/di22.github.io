import { Action, createReducer, on } from '@ngrx/store';
import * as RelativesActions from '../actions/relatives.actions';

export const relativesFeatureKey = 'relatives';

export interface State {
relatives: [];
}

export const initialState: State = {
  relatives: []
};

const relativesReducer = createReducer(
  initialState,

  on(RelativesActions.loadRelatives, state => state),
  on(RelativesActions.loadRelativesSuccess, (state, action) => ({state, relatives: action.data})),
  on(RelativesActions.loadRelativesFailure, (state, action) => ({state, relatives: []})),

);

export function reducer(state: State | undefined, action: Action) {
  return relativesReducer(state, action);
}
