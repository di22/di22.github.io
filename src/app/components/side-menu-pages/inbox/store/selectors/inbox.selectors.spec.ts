import * as fromInbox from '../reducers/inbox.reducer';
import { selectInboxState } from './inbox.selectors';

describe('Inbox Selectors', () => {
  it('should select the feature state', () => {
    const result = selectInboxState({
      [fromInbox.inboxFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
