import * as fromTransactionCustType from '../reducers/transaction-cust-type.reducer';
import { selectTransactionCustTypeState } from './transaction-cust-type.selectors';

describe('TransactionCustType Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTransactionCustTypeState({
      [fromTransactionCustType.transactionCustTypeFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
