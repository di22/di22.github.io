import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, concatMap, tap, switchMap} from 'rxjs/operators';
import { of } from 'rxjs';

import * as RequestActions from '../actions/request.actions';
import * as CustomerActions from '../../../parties/party/store/actions/customer.actions';
import * as RequestDebagaActions from '../../../../components/debaga/store/actions/request-debaga.actions';
import * as transactionRequestAttachmentsActions from '../../../../components/request-attachment/store/actions/transaction-request-attachment.actions';
import {RequestService} from '../../../../services/request.service';
import {ActivatedRoute, Router} from '@angular/router';



@Injectable()
export class RequestEffects {

  loadRequests$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RequestActions.CreateRequest),
      concatMap((action) =>
        this.requestService.createRequest(action.request).pipe(
          map((request: any) => request.data),
          map(request => RequestActions.CreateRequestsSuccess({ request })),
          tap((request) => this.router.navigate([`${this.router.url}`, request.request.id], {relativeTo: this.route})),
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
          switchMap((request: any) => [
            CustomerActions.loadCustomersSuccess({customers: request.request.procurationCustomers ? request.request.procurationCustomers : [] }),
            RequestDebagaActions.loadRequestDebagasSuccess({data: request.request.requestDebagas ? request.request.requestDebagas : [] }),
            RequestDebagaActions.addDebagaSuccess({debaga: request.request.debaga ? request.request.debaga : {}}),
            transactionRequestAttachmentsActions.loadTransactionRequestAttachments({transactionRequestAttachments:
                request.request.requestCustomerAttachments ? request.request.requestCustomerAttachments : []})
          ]),
          catchError(error => of(RequestActions.CreateRequestsFailure({ error }))))
      )
    );
  });

  url: string;
  constructor(private actions$: Actions,
              private requestService: RequestService,
              private route: ActivatedRoute,
              private router: Router) {}

}
