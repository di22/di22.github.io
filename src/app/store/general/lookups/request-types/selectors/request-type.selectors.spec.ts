import * as fromRequestType from '../reducers/request-type.reducer';
import { selectRequestTypeState } from './request-type.selectors';

describe('RequestType Selectors', () => {
  it('should select the feature state', () => {
    const result = selectRequestTypeState({
      [fromRequestType.requestTypeFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
