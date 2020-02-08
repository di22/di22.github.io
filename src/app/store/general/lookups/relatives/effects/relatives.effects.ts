import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as RelativesActions from '../actions/relatives.actions';
import {LookupsService} from '../../../../../services/lookups.service';



@Injectable()
export class RelativesEffects {

  loadRelativess$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(RelativesActions.loadRelatives),
      concatMap((action) =>
        this.lookupsService.getRelativesByTranscationCode(action.transactionId).pipe(
          map(data => RelativesActions.loadRelativesSuccess({ data: data.data.relativeNames })),
          catchError(error => of(RelativesActions.loadRelativesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions,
              private lookupsService: LookupsService) {}

}
