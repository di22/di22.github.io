import * as fromExemptReason from '../reducers/exempt-reason.reducer';
import { selectExemptReasonState } from './exempt-reason.selectors';

describe('ExemptReason Selectors', () => {
  it('should select the feature state', () => {
    const result = selectExemptReasonState({
      [fromExemptReason.exemptReasonFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
