import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as TransactionCustTypeActions from '../actions/transaction-cust-type.actions';
import {LookupsService} from '../../../../../services/lookups.service';



@Injectable()
export class TransactionCustTypeEffects {

  loadTransactionCustTypes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TransactionCustTypeActions.loadTransactionCustTypes),
      concatMap((action) =>
        this.lookupsService.getTransactionCustomerTypes(action.id).pipe(
          map(data => TransactionCustTypeActions.loadTransactionCustTypesSuccess({ data: data.data.transactionCustTypes })),
          catchError(error => of(TransactionCustTypeActions.loadTransactionCustTypesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions,
              private lookupsService: LookupsService) {}

}
