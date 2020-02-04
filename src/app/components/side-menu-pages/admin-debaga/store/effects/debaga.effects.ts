import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as DebagaActions from '../actions/debaga.actions';
import {AdminDebagaService} from '../../../../../services/admin-debaga.service';



@Injectable()
export class DebagaEffects {

  loadDebagas$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(DebagaActions.loadDebagas),
      concatMap((action) =>
        this.debagaService.getTransactionDebagaTemplates({ data: { transactionId: action.transactionId }}).pipe(
          map((debagas: any) => debagas.data.transactionTypeDebaga ? debagas.data.transactionTypeDebaga : []),
          map(debagas => DebagaActions.loadDebagasSuccess({ debagas })),
          catchError(error => of(DebagaActions.loadDebagasFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions,
              private debagaService: AdminDebagaService) {}

}
