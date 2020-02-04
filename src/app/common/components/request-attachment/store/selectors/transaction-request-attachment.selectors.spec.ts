import * as fromTransactionRequestAttachment from '../reducers/transaction-request-attachment.reducer';
import { selectTransactionRequestAttachmentState } from './transaction-request-attachment.selectors';

describe('TransactionRequestAttachment Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTransactionRequestAttachmentState({
      [fromTransactionRequestAttachment.transactionRequestAttachmentFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
