import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAdminType from '../reducers/admin-type.reducer';

export const selectAdminTypeState = createFeatureSelector<fromAdminType.State>(
  fromAdminType.adminTypeFeatureKey
);

export const selectFeatureAdminTypes = createSelector(
  selectAdminTypeState,
  (state: fromAdminType.State) => state.types
);
