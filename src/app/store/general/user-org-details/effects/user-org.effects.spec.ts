import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UserOrgEffects } from './user-org.effects';

describe('UserOrgEffects', () => {
  let actions$: Observable<any>;
  let effects: UserOrgEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserOrgEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<UserOrgEffects>(UserOrgEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
