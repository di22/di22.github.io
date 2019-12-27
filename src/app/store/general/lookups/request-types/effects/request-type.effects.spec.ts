import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RequestTypeEffects } from './request-type.effects';

describe('RequestTypeEffects', () => {
  let actions$: Observable<any>;
  let effects: RequestTypeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RequestTypeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<RequestTypeEffects>(RequestTypeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
