import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RelativesEffects } from './relatives.effects';

describe('RelativesEffects', () => {
  let actions$: Observable<any>;
  let effects: RelativesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RelativesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<RelativesEffects>(RelativesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
