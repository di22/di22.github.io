import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRequestAttachments from '../reducers/request-attachments.reducer';

export const selectRequestAttachmentsState = createFeatureSelector<fromRequestAttachments.State>(
  fromRequestAttachments.requestAttachmentsFeatureKey
);

export const requestAttachmentsSelector = createSelector(
  selectRequestAttachmentsState,
  (state: fromRequestAttachments.State) => state.requestAttachments
)
