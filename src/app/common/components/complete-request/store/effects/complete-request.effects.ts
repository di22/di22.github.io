import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as CompleteRequestActions from '../actions/complete-request.actions';
import {CompleteRequestService} from '../../../../services/complete-request.service';



@Injectable()
export class CompleteRequestEffects {

  loadCompleteRequests$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CompleteRequestActions.invoiceEstimation),
      concatMap((action) =>
        this.completeRequestService.invoiceEstimation(action.invoice).pipe(
          map(data => CompleteRequestActions.invoiceEstimationSuccess({ invoice: data })),
          catchError(error => of(CompleteRequestActions.loadCompleteRequestsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions,
              private completeRequestService: CompleteRequestService) {}

}
