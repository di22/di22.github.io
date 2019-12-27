import { Action, createReducer, on } from '@ngrx/store';
import * as InboxActions from '../actions/inbox.actions';

export const inboxFeatureKey = 'inbox';

export interface State {
result: any;
error: any;
}

export const initialState: State = {
  result: [],
  error: null
};

const inboxReducer = createReducer(
  initialState,

  on(InboxActions.loadInbox, state => state),
  on(InboxActions.loadInboxSuccess, (state, action) => ({...state, result: action.data, error: null})),
  on(InboxActions.loadInboxFailure, (state, action) => ({...state, error: action.error, result: []})),

);

export function reducer(state: State | undefined, action: Action) {
  return inboxReducer(state, action);
}
