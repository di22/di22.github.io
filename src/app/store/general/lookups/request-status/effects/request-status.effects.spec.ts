import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RequestStatusEffects } from './request-status.effects';

describe('RequestStatusEffects', () => {
  let actions$: Observable<any>;
  let effects: RequestStatusEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RequestStatusEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<RequestStatusEffects>(RequestStatusEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
