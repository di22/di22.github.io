import * as fromUserOrg from '../reducers/user-org.reducer';
import { selectUserOrgState } from './user-org.selectors';

describe('UserOrg Selectors', () => {
  it('should select the feature state', () => {
    const result = selectUserOrgState({
      [fromUserOrg.userOrgFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
