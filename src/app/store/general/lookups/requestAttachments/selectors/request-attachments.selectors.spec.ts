import * as fromRequestAttachments from '../reducers/request-attachments.reducer';
import { selectRequestAttachmentsState } from './request-attachments.selectors';

describe('RequestAttachments Selectors', () => {
  it('should select the feature state', () => {
    const result = selectRequestAttachmentsState({
      [fromRequestAttachments.requestAttachmentsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
