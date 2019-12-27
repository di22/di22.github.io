import * as fromRequestStatus from '../reducers/request-status.reducer';
import { selectRequestStatusState } from './request-status.selectors';

describe('RequestStatus Selectors', () => {
  it('should select the feature state', () => {
    const result = selectRequestStatusState({
      [fromRequestStatus.requestStatusFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
