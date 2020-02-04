import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RequestDebagaEffects } from './request-debaga.effects';

describe('RequestDebagaEffects', () => {
  let actions$: Observable<any>;
  let effects: RequestDebagaEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RequestDebagaEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<RequestDebagaEffects>(RequestDebagaEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
