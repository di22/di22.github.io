import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as TransactionRequestAttachmentActions from '../actions/transaction-request-attachment.actions';
import {RequestAttachmentService} from '../../../../services/request-attachment.service';



@Injectable()
export class TransactionRequestAttachmentEffects {

  addTransactionRequestAttachment$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(TransactionRequestAttachmentActions.addTransactionRequestAttachment),
      concatMap((action) =>
        this.requestAttachmentService.addRequestAttachment(action.transactionRequestAttachment).pipe(
          map(data => data))
      )
    );
  });

  deleteTransactionRequestAttachment$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(TransactionRequestAttachmentActions.deleteTransactionRequestAttachment),
      concatMap((action) =>
        this.requestAttachmentService.addRequestAttachment(action.id).pipe(
          map(data => TransactionRequestAttachmentActions.deleteTransactionRequestAttachmentSuccess({ id: action.id })))
      )
    );
  });

  constructor(private actions$: Actions,
              private requestAttachmentService: RequestAttachmentService) {}

}
