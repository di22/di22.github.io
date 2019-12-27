import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CustiomerIdTypeEffects } from './custiomer-id-type.effects';

describe('CustiomerIdTypeEffects', () => {
  let actions$: Observable<any>;
  let effects: CustiomerIdTypeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CustiomerIdTypeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<CustiomerIdTypeEffects>(CustiomerIdTypeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
