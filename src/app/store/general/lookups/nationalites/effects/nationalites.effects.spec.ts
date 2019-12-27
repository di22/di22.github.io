import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NationalitesEffects } from './nationalites.effects';

describe('NationalitesEffects', () => {
  let actions$: Observable<any>;
  let effects: NationalitesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NationalitesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<NationalitesEffects>(NationalitesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
