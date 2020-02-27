import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUserOrg from '../reducers/user-org.reducer';

export const selectUserOrgState = createFeatureSelector<fromUserOrg.State>(
  fromUserOrg.userOrgFeatureKey
);

export const selectUserDetails = createSelector(
  selectUserOrgState,
  (state: fromUserOrg.State) => state.userDetails
);
