import { Action, createReducer, on } from '@ngrx/store';
import * as TransactionRequestAttachmentActions from '../actions/transaction-request-attachment.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {TransactionRequestAttachment} from '../transaction-request-attachment.model';


export const transactionRequestAttachmentsFeatureKey = 'transactionRequestAttachments';

export interface State extends EntityState<TransactionRequestAttachment> {
  // additional entities state properties
}

export const adapter: EntityAdapter<TransactionRequestAttachment> = createEntityAdapter<TransactionRequestAttachment>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

const transactionRequestAttachmentReducer = createReducer(
  initialState,
  on(TransactionRequestAttachmentActions.addTransactionRequestAttachmentSuccess,
    (state, action) => adapter.addOne(action.transactionRequestAttachment, state)
  ),
  on(TransactionRequestAttachmentActions.upsertTransactionRequestAttachment,
    (state, action) => adapter.upsertOne(action.transactionRequestAttachment, state)
  ),
  on(TransactionRequestAttachmentActions.addTransactionRequestAttachments,
    (state, action) => adapter.addMany(action.transactionRequestAttachments, state)
  ),
  on(TransactionRequestAttachmentActions.upsertTransactionRequestAttachments,
    (state, action) => adapter.upsertMany(action.transactionRequestAttachments, state)
  ),
  on(TransactionRequestAttachmentActions.updateTransactionRequestAttachment,
    (state, action) => adapter.updateOne(action.transactionRequestAttachment, state)
  ),
  on(TransactionRequestAttachmentActions.updateTransactionRequestAttachments,
    (state, action) => adapter.updateMany(action.transactionRequestAttachments, state)
  ),
  on(TransactionRequestAttachmentActions.deleteTransactionRequestAttachmentSuccess,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(TransactionRequestAttachmentActions.deleteTransactionRequestAttachments,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(TransactionRequestAttachmentActions.loadTransactionRequestAttachments,
    (state, action) => adapter.addAll(action.transactionRequestAttachments, state)
  ),
  on(TransactionRequestAttachmentActions.clearTransactionRequestAttachments,
    state => adapter.removeAll(state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return transactionRequestAttachmentReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
