import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as NationalitesActions from '../actions/nationalites.actions';
import {LookupsService} from '../../../../../services/lookups.service';



@Injectable()
export class NationalitesEffects {

  loadNationalities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NationalitesActions.loadNationalities),
      concatMap(() =>
        this.lookupsService.getAllNationalities().pipe(
          map(nationalities =>  nationalities.data.lookupList ),
          map(nationalities => NationalitesActions.loadNationalitiesSuccess({ nationalities })),
          catchError(error => of(NationalitesActions.loadNationalitiesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions,
              private lookupsService: LookupsService) {}

}
