import { createAction, props } from '@ngrx/store';

export const loadMainCategories = createAction(
  '[MainCategories] Load MainCategories'
);

export const GetSelectedCategory = createAction(
  '[MainCategories] Load MainCategories',
  props<{ id: number }>()
);

export const loadMainCategoriesSuccess = createAction(
  '[MainCategories] Load MainCategories Success',
  props<{ transactions: any }>()
);

export const loadMainCategoriesFailure = createAction(
  '[MainCategories] Load MainCategories Failure',
  props<{ error: any }>()
);
