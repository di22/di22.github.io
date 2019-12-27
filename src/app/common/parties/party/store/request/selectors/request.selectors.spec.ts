import * as fromRequest from '../reducers/request.reducer';
import { selectRequestState } from './request.selectors';

describe('Request Selectors', () => {
  it('should select the feature state', () => {
    const result = selectRequestState({
      [fromRequest.requestFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
