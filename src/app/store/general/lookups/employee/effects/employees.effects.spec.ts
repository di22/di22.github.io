import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EmployeesEffects } from './employees.effects';

describe('EmployeesEffects', () => {
  let actions$: Observable<any>;
  let effects: EmployeesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmployeesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<EmployeesEffects>(EmployeesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
