import { createAction, props } from '@ngrx/store';
import {SearchInbox} from '../../../../../DTO`s/search-inbox';

export const loadInbox = createAction(
  '[Inbox] Load Inbox',
  props<{data: any}>()
);

export const loadInboxSuccess = createAction(
  '[Inbox] Load Inbox Success',
  props<{ data: any }>()
);

export const loadInboxFailure = createAction(
  '[Inbox] Load Inbox Failure',
  props<{ error: any }>()
);
