import * as fromDebaga from '../reducers/debaga.reducer';
import { selectDebagaState } from './debaga.selectors';

describe('Debaga Selectors', () => {
  it('should select the feature state', () => {
    const result = selectDebagaState({
      [fromDebaga.debagasFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
