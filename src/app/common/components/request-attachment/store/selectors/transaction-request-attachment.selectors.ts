import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTransactionRequestAttachment from '../reducers/transaction-request-attachment.reducer';

export const selectTransactionRequestAttachmentState = createFeatureSelector<fromTransactionRequestAttachment.State>(
  fromTransactionRequestAttachment.transactionRequestAttachmentsFeatureKey
);

export const transactionRequestAttachmentsSelector = createSelector(
  selectTransactionRequestAttachmentState,
  fromTransactionRequestAttachment.selectAll
);
