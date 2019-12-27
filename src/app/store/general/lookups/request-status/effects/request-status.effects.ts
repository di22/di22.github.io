import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, concatMap} from 'rxjs/operators';
import { of } from 'rxjs';

import * as RequestStatusActions from '../actions/request-status.actions';
import {LookupsService} from '../../../../../services/lookups.service';



@Injectable()
export class RequestStatusEffects {

  loadRequestStatuss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RequestStatusActions.loadRequestStatuses),
      concatMap(() =>
        this.lookupsService.getRequestStatuses().pipe(
          map((requestStatues) => requestStatues.data.lookupList ),
          map((requestStatues) => RequestStatusActions.loadRequestStatusesSuccess({ requestStatues })),
          catchError(error => of(RequestStatusActions.loadRequestStatuesesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions,
              private lookupsService: LookupsService) {}

}
