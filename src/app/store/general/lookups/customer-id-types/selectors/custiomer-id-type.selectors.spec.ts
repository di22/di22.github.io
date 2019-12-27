import * as fromCustiomerIdType from '../reducers/custiomer-id-type.reducer';
import { selectCustiomerIdTypeState } from './custiomer-id-type.selectors';

describe('CustiomerIdType Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCustiomerIdTypeState({
      [fromCustiomerIdType.custiomerIdTypeFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
