import * as fromCustiomerIdType from '../reducers/custiomer-id-type.reducer';
import { selectCustomerIdTypeState } from './custiomer-id-type.selectors';

describe('CustiomerIdType Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCustomerIdTypeState({
      [fromCustiomerIdType.customerIdTypeFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
