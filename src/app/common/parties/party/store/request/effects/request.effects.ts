import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, concatMap, tap} from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as RequestActions from '../actions/request.actions';
import * as CustomerActions from '../../customer/actions/customer.actions';
import {RequestService} from '../../../../../services/request.service';
import {Router} from '@angular/router';



@Injectable()
export class RequestEffects {

  loadRequests$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RequestActions.CreateRequest),
      concatMap((action) =>
        this.requestService.createRequest(action.request).pipe(
          map((request: any) => request.data),
          map(request => RequestActions.CreateRequestsSuccess({ request })),
          tap((request) => this.router.navigate(['notary/Attestations', request.request.id]) ),
          catchError(error => of(RequestActions.CreateRequestsFailure({ error }))))
      )
    );
  });

  getRequestDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RequestActions.GetRequestDetails),
      concatMap((action) =>
        this.requestService.getRequestDetails({data: {requestId: action.requestId}}).pipe(
          map((request: any) => request.data.request),
          map(request => RequestActions.GetRequestDetailsSuccess({ request })),
          map((request: any) =>
     CustomerActions.loadCustomersSuccess({customers: request.request.procurationCustomers ? request.request.procurationCustomers : [] })),
          catchError(error => of(RequestActions.CreateRequestsFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions,
              private requestService: RequestService,
              private router: Router) {}

}
