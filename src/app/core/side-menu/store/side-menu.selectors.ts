import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSideMenu from './side-menu.reducer';

export const selectSideMenuState = createFeatureSelector<fromSideMenu.State>(
  fromSideMenu.sideMenuFeatureKey
);
