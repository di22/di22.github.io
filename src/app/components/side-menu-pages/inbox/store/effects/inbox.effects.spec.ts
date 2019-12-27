import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { InboxEffects } from './inbox.effects';

describe('InboxEffects', () => {
  let actions$: Observable<any>;
  let effects: InboxEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InboxEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<InboxEffects>(InboxEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
