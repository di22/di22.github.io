import * as fromCompleteRequest from '../reducers/complete-request.reducer';
import { selectCompleteRequestState } from './complete-request.selectors';

describe('CompleteRequest Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCompleteRequestState({
      [fromCompleteRequest.completeRequestFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
