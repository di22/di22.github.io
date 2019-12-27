import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as CustomerIdTypeActions from '../actions/custiomer-id-type.actions';
import {LookupsService} from '../../../../../services/lookups.service';



@Injectable()
export class CustiomerIdTypeEffects {

  loadCustomerIdTypes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CustomerIdTypeActions.loadCustomerIdTypes),
      concatMap(() =>
        this.lookupsService.getAllCustomerIdTypes().pipe(
          map(Id => Id.data.lookupList),
          map(Id => CustomerIdTypeActions.loadCustomerIdTypesSuccess({ Id })),
          catchError(error => of(CustomerIdTypeActions.loadCustomerIdTypesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions,
              private lookupsService: LookupsService) {}

}
