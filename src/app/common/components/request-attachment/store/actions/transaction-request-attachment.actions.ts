import { createAction, props } from '@ngrx/store';
import {TransactionRequestAttachment} from '../transaction-request-attachment.model';
import {Update} from '@ngrx/entity';


export const loadTransactionRequestAttachments = createAction(
  '[TransactionRequestAttachment/API] Load TransactionRequestAttachments',
  props<{ transactionRequestAttachments: TransactionRequestAttachment[] }>()
);

export const addTransactionRequestAttachment = createAction(
  '[TransactionRequestAttachment/API] Add TransactionRequestAttachment',
  props<{ transactionRequestAttachment: any }>()
);

export const addTransactionRequestAttachmentSuccess = createAction(
  '[TransactionRequestAttachment/API] Add TransactionRequestAttachment Success',
  props<{ transactionRequestAttachment: TransactionRequestAttachment }>()
);

export const upsertTransactionRequestAttachment = createAction(
  '[TransactionRequestAttachment/API] Upsert TransactionRequestAttachment',
  props<{ transactionRequestAttachment: TransactionRequestAttachment }>()
);

export const addTransactionRequestAttachments = createAction(
  '[TransactionRequestAttachment/API] Add TransactionRequestAttachments',
  props<{ transactionRequestAttachments: TransactionRequestAttachment[] }>()
);

export const upsertTransactionRequestAttachments = createAction(
  '[TransactionRequestAttachment/API] Upsert TransactionRequestAttachments',
  props<{ transactionRequestAttachments: TransactionRequestAttachment[] }>()
);

export const updateTransactionRequestAttachment = createAction(
  '[TransactionRequestAttachment/API] Update TransactionRequestAttachment',
  props<{ transactionRequestAttachment: Update<TransactionRequestAttachment> }>()
);

export const updateTransactionRequestAttachments = createAction(
  '[TransactionRequestAttachment/API] Update TransactionRequestAttachments',
  props<{ transactionRequestAttachments: Update<TransactionRequestAttachment>[] }>()
);

export const deleteTransactionRequestAttachment = createAction(
  '[TransactionRequestAttachment/API] Delete TransactionRequestAttachment',
  props<{ id: any }>()
);

export const deleteTransactionRequestAttachmentSuccess = createAction(
  '[TransactionRequestAttachment/API] Delete TransactionRequestAttachment Success',
  props<{ id: string }>()
);

export const deleteTransactionRequestAttachments = createAction(
  '[TransactionRequestAttachment/API] Delete TransactionRequestAttachments',
  props<{ ids: string[] }>()
);

export const clearTransactionRequestAttachments = createAction(
  '[TransactionRequestAttachment/API] Clear TransactionRequestAttachments'
);

