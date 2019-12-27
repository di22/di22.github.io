import { Action, createReducer, on } from '@ngrx/store';
import * as SideMenuActions from './side-menu.actions';

export const sideMenuFeatureKey = 'sideMenu';

export interface State {
data: any;
}

export const initialState: State = {
data: null
};

const sideMenuReducer = createReducer(
  initialState,

  on(SideMenuActions.loadSideMenus, state => state),
  on(SideMenuActions.loadSideMenusSuccess, (state, action) => state),
  on(SideMenuActions.loadSideMenusFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return sideMenuReducer(state, action);
}
