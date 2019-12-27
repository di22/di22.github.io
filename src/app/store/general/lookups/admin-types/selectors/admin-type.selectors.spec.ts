import * as fromAdminType from '../reducers/admin-type.reducer';
import { selectAdminTypeState } from './admin-type.selectors';

describe('AdminType Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAdminTypeState({
      [fromAdminType.adminTypeFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
