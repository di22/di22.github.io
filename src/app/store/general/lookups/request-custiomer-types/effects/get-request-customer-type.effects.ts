import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as GetRequestCustomerTypeActions from '../actions/get-request-customer-type.actions';
import {LookupsService} from '../../../../../services/lookups.service';



@Injectable()
export class GetRequestCustomerTypeEffects {

  loadGetRequestCustomerTypes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetRequestCustomerTypeActions.loadGetRequestCustomerTypes),
      concatMap(() =>
        this.lookupsService.getAllRequestCustomerTypes().pipe(
          map(types => types.data.lookupList),
          map(types => GetRequestCustomerTypeActions.loadGetRequestCustomerTypesSuccess({ types })),
          catchError(error => of(GetRequestCustomerTypeActions.loadGetRequestCustomerTypesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions,
              private lookupsService: LookupsService) {}

}
