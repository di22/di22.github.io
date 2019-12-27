import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNationalities from '../reducers/nationalites.reducer';

export const selectNationalitesState = createFeatureSelector<fromNationalities.State>(
  fromNationalities.nationalitiesFeatureKey
);
