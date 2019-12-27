import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromInbox from '../reducers/inbox.reducer';

export const selectInboxState = createFeatureSelector<fromInbox.State>(
  fromInbox.inboxFeatureKey
);
export const selectFeatureResult = createSelector(
  selectInboxState,
  (state: fromInbox.State) => state.result
);
