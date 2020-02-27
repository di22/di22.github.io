import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ExemptReasonEffects } from './exempt-reason.effects';

describe('ExemptReasonEffects', () => {
  let actions$: Observable<any>;
  let effects: ExemptReasonEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExemptReasonEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ExemptReasonEffects>(ExemptReasonEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
