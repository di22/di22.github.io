import * as fromGetRequestCustomerType from '../reducers/get-request-customer-type.reducer';
import { selectGetRequestCustomerTypeState } from './get-request-customer-type.selectors';

describe('GetRequestCustomerType Selectors', () => {
  it('should select the feature state', () => {
    const result = selectGetRequestCustomerTypeState({
      [fromGetRequestCustomerType.getRequestCustomerTypeFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
