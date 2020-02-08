import * as fromRelatives from '../reducers/relatives.reducer';
import { selectRelativesState } from './relatives.selectors';

describe('Relatives Selectors', () => {
  it('should select the feature state', () => {
    const result = selectRelativesState({
      [fromRelatives.relativesFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
