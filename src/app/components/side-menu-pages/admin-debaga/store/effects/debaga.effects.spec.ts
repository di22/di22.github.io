import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DebagaEffects } from './debaga.effects';

describe('DebagaEffects', () => {
  let actions$: Observable<any>;
  let effects: DebagaEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DebagaEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<DebagaEffects>(DebagaEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
