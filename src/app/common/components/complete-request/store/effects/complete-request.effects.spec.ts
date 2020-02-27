import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CompleteRequestEffects } from './complete-request.effects';

describe('CompleteRequestEffects', () => {
  let actions$: Observable<any>;
  let effects: CompleteRequestEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CompleteRequestEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<CompleteRequestEffects>(CompleteRequestEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
