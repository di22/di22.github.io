import * as fromNationalites from '../reducers/nationalites.reducer';
import { selectNationalitesState } from './nationalites.selectors';

describe('Nationalites Selectors', () => {
  it('should select the feature state', () => {
    const result = selectNationalitesState({
      [fromNationalites.nationalitiesFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
