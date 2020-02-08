import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LawOfficeEffects } from './law-office.effects';

describe('LawOfficeEffects', () => {
  let actions$: Observable<any>;
  let effects: LawOfficeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LawOfficeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<LawOfficeEffects>(LawOfficeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
