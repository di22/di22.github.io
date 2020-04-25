import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, concatMap, tap} from 'rxjs/operators';
import { of } from 'rxjs';

import * as RequestDebagaActions from '../actions/request-debaga.actions';
import * as RequestActions from '../../../request/store/actions/request.actions';
import {DebagaService} from '../../../../services/debaga.service';
import {MessageService} from '../../../../../services/config/message.service';



@Injectable()
export class RequestDebagaEffects {

  addRequestDebaga$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(RequestDebagaActions.addRequestDebaga),
      concatMap((action) =>
        this.debagaService.createRequestDebaga(action.requestDebaga).pipe(
          tap(data => this.messageService.successMessage('تم إضافة النماذج بنجاح')),
          catchError(error => of(RequestDebagaActions.loadRequestDebagasFailure({ error }))))
      )
    );
  });
  updateRequestDebaga$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(RequestDebagaActions.updateRequestDebaga),
      concatMap((action) =>
        this.debagaService.updaterequestDebaga(action.requestDebaga).pipe(
          tap(data => this.messageService.successMessage('تم تعديل النماذج بنجاح')),
          catchError(error => of(RequestDebagaActions.loadRequestDebagasFailure({ error }))))
      )
    );
  });
  updateRequestDebagaByGroup$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(RequestDebagaActions.updateRequestDebagaByGroup),
      concatMap((action) =>
        this.debagaService.updateRequestDebagaByGroup(action.requestDebaga).pipe(
          map(data => RequestActions.GetRequestDetails({requestId: action.requestDebaga.data.requestDebaga[0].request.id})),
          catchError(error => of(RequestDebagaActions.loadRequestDebagasFailure({ error }))))
      )
    );
  });
  deleteRequestDebagaByGroup$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(RequestDebagaActions.deleteRequestDebaga),
      concatMap((action) =>
        this.debagaService.deleteRequestDebagaByGroup(action.id).pipe(
          map(data => RequestActions.GetRequestDetails({requestId: action.id.data.requestId})),
          catchError(error => of(RequestDebagaActions.loadRequestDebagasFailure({ error }))))
      )
    );
  });
  addDebaga$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(RequestDebagaActions.addDebaga),
      concatMap((action) =>
        this.debagaService.createDebaga(action.debaga).pipe(
          tap(data => this.messageService.successMessage('تم إضافة النموذج النصي بنجاح')),
          catchError(error => of(RequestDebagaActions.loadRequestDebagasFailure({ error }))))
      )
    );
  });
  updateDebaga$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(RequestDebagaActions.updateDebaga),
      concatMap((action) =>
        this.debagaService.updateDebaga(action.debaga).pipe(
          tap(data => this.messageService.successMessage('تم تعديل النموذج النصي بنجاح')),
          catchError(error => of(RequestDebagaActions.loadRequestDebagasFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions,
              private debagaService: DebagaService,
              private messageService: MessageService) {

  }

}
