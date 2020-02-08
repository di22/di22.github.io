import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLawOffice from '../reducers/law-office.reducer';

export const selectLawOfficeState = createFeatureSelector<fromLawOffice.State>(
  fromLawOffice.lawOfficeFeatureKey
);

export const lawOfficesSelector = createSelector(
  selectLawOfficeState,
  (state: fromLawOffice.State) => state.offices
);

export const lawersSelector = createSelector(
  selectLawOfficeState,
  (state: fromLawOffice.State) => state.lawers
);
