import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, concatMap} from 'rxjs/operators';
import { of } from 'rxjs';

import * as RequestTypeActions from '../actions/request-type.actions';
import {LookupsService} from '../../../../../services/lookups.service';



@Injectable()
export class RequestTypeEffects {

  loadRequestTypes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RequestTypeActions.loadRequestTypes),
      concatMap(() =>
         this.lookupsService.getRequestCustomerTypes().pipe(
          map(requestTypes =>  requestTypes.data.lookupList ),
          map(requestTypes => RequestTypeActions.loadRequestTypesSuccess({ requestTypes })),
          catchError(error => of(RequestTypeActions.loadRequestTypesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions,
              private lookupsService: LookupsService) {}

}
