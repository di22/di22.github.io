import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TransactionCustTypeEffects } from './transaction-cust-type.effects';

describe('TransactionCustTypeEffects', () => {
  let actions$: Observable<any>;
  let effects: TransactionCustTypeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TransactionCustTypeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<TransactionCustTypeEffects>(TransactionCustTypeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
