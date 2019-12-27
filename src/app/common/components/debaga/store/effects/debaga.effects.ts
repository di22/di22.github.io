import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as DebagaActions from '../actions/debaga.actions';
import {DebagaService} from '../../../../services/debaga.service';



@Injectable()
export class DebagaEffects {

  loadDebagas$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(DebagaActions.loadDebaga),
      concatMap((action) =>
        this.debagaService.getDebagas({ data: { transactionId: action.transactionId }}).pipe(
          map((debaga: any) => debaga.data.transactionTypeDebaga),
          map(debaga => DebagaActions.loadDebagaSuccess({ debaga })),
          catchError(error => of(DebagaActions.loadDebagaFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions, private debagaService: DebagaService) {}

}
