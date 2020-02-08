import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as LawOfficeActions from '../actions/law-office.actions';
import {LookupsService} from '../../../../../services/lookups.service';



@Injectable()
export class LawOfficeEffects {

  loadLawOffices$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(LawOfficeActions.loadLawOffices),
      concatMap((action) =>
        this.lookupsService.getLawOffices(action.resourc_id).pipe(
          map(data => LawOfficeActions.loadLawOfficesSuccess({ data: data.items })),
          catchError(error => of(LawOfficeActions.loadLawOfficesFailure({ error }))))
      )
    );
  });

  loadLawers$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(LawOfficeActions.loadLawers),
      concatMap((action) =>
        this.lookupsService.getLawers(action.resourc_id, action.InstitutionId).pipe(
          map(data => LawOfficeActions.loadLawersSuccess({ data: data.items }))
        //  catchError(error => of(LawOfficeActions.loadLawOfficesFailure({ error })))
          )
      )
    );
  });

  constructor(private actions$: Actions,
              private lookupsService: LookupsService) {}

}
