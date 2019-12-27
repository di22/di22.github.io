import { createAction, props } from '@ngrx/store';

export const loadSideMenus = createAction(
  '[SideMenu] Load SideMenus'
);

export const loadSideMenusSuccess = createAction(
  '[SideMenu] Load SideMenus Success',
  props<{ data: any }>()
);

export const loadSideMenusFailure = createAction(
  '[SideMenu] Load SideMenus Failure',
  props<{ error: any }>()
);
