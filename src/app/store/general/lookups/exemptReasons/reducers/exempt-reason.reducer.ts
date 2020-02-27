import { Action, createReducer, on } from '@ngrx/store';
import * as ExemptReasonActions from '../actions/exempt-reason.actions';

export const exemptReasonFeatureKey = 'exemptReason';

export interface State {
  exemptReasons: [];
  error: any;
}

export const initialState: State = {
  exemptReasons: [],
  error: null
};

const exemptReasonReducer = createReducer(
  initialState,

  on(ExemptReasonActions.loadExemptReasons, state => state),
  on(ExemptReasonActions.loadExemptReasonsSuccess, (state, action) => ({...state, exemptReasons: action.exemptReasons, error: null})),
  on(ExemptReasonActions.loadExemptReasonsFailure, (state, action) => ({...state, error: action.error, exemptReasons: []})),

);

export function reducer(state: State | undefined, action: Action) {
  return exemptReasonReducer(state, action);
}
