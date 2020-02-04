import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TransactionRequestAttachmentEffects } from './transaction-request-attachment.effects';

describe('TransactionRequestAttachmentEffects', () => {
  let actions$: Observable<any>;
  let effects: TransactionRequestAttachmentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TransactionRequestAttachmentEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<TransactionRequestAttachmentEffects>(TransactionRequestAttachmentEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
