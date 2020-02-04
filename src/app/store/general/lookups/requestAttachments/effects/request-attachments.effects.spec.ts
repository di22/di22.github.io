import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RequestAttachmentsEffects } from './request-attachments.effects';

describe('RequestAttachmentsEffects', () => {
  let actions$: Observable<any>;
  let effects: RequestAttachmentsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RequestAttachmentsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<RequestAttachmentsEffects>(RequestAttachmentsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
