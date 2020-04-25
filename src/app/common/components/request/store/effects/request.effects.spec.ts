import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RequestEffects } from './request.effects';

describe('RequestEffects', () => {
  // tslint:disable-next-line:prefer-const
  let actions$: Observable<any>;
  let effects: RequestEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RequestEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<RequestEffects>(RequestEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
