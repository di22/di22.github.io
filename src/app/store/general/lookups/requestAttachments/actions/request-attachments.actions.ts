import { createAction, props } from '@ngrx/store';
import {RequestAttachments} from '../../../../../DTO`s/requestAttachments';

export const loadRequestAttachmentss = createAction(
  '[RequestAttachments] Load RequestAttachmentss',
  props<{ transactionTypeCode: any}>()
);

export const loadRequestAttachmentssSuccess = createAction(
  '[RequestAttachments] Load RequestAttachmentss Success',
  props<{ data: RequestAttachments[] }>()
);

export const loadRequestAttachmentssFailure = createAction(
  '[RequestAttachments] Load RequestAttachmentss Failure',
  props<{ error: any }>()
);
