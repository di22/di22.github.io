import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AdminTypeEffects } from './admin-type.effects';

describe('AdminTypeEffects', () => {
  let actions$: Observable<any>;
  let effects: AdminTypeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AdminTypeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<AdminTypeEffects>(AdminTypeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
