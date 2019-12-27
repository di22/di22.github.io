import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as AdminTypeActions from '../actions/admin-type.actions';
import {LookupsService} from '../../../../../services/lookups.service';
import {CommonService} from '../../../../../services/config/common.service';



@Injectable()
export class AdminTypeEffects {

  loadAdminTypes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AdminTypeActions.loadAdminTypes),
      concatMap(() =>
        this.lookupsService.getNotaryAdminTypes().pipe(
          map(types => types.items),
          map(types => AdminTypeActions.loadAdminTypesSuccess({ types })),
          catchError(error => of(AdminTypeActions.loadAdminTypesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions,
              private lookupsService: LookupsService,
              private commonService: CommonService) {}

}
