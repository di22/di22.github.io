import * as fromRequestDebaga from '../reducers/request-debaga.reducer';
import { selectRequestDebagaState } from './request-debaga.selectors';

describe('RequestDebaga Selectors', () => {
  it('should select the feature state', () => {
    const result = selectRequestDebagaState({
      [fromRequestDebaga.requestDebagaFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
