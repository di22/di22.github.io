import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as ExemptReasonActions from '../actions/exempt-reason.actions';
import {LookupsService} from '../../../../../services/lookups.service';



@Injectable()
export class ExemptReasonEffects {

  loadExemptReasons$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ExemptReasonActions.loadExemptReasons),
      concatMap((action) =>
        this.lookupsService.getAllExemptReasons().pipe(
          map(data => ExemptReasonActions.loadExemptReasonsSuccess({ exemptReasons: data.data.lookupList })),
          catchError(error => of(ExemptReasonActions.loadExemptReasonsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions,
              private lookupsService: LookupsService) {}

}
