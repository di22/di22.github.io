import * as fromLawOffice from '../reducers/law-office.reducer';
import { selectLawOfficeState } from './law-office.selectors';

describe('LawOffice Selectors', () => {
  it('should select the feature state', () => {
    const result = selectLawOfficeState({
      [fromLawOffice.lawOfficeFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
