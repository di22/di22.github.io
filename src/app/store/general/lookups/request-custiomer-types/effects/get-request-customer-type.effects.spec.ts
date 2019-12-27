import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GetRequestCustomerTypeEffects } from './get-request-customer-type.effects';

describe('GetRequestCustomerTypeEffects', () => {
  let actions$: Observable<any>;
  let effects: GetRequestCustomerTypeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetRequestCustomerTypeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<GetRequestCustomerTypeEffects>(GetRequestCustomerTypeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
