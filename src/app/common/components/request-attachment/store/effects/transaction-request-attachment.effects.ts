import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, concatMap, tap} from 'rxjs/operators';

import * as TransactionRequestAttachmentActions from '../actions/transaction-request-attachment.actions';
import {RequestAttachmentService} from '../../../../services/request-attachment.service';
import * as RequestActions from '../../../request/store/actions/request.actions';
import {MessageService} from '../../../../../services/config/message.service';



@Injectable()
export class TransactionRequestAttachmentEffects {

  addTransactionRequestAttachment$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(TransactionRequestAttachmentActions.addTransactionRequestAttachment),
      concatMap((action) =>
        this.requestAttachmentService.addRequestAttachment(action.transactionRequestAttachment).pipe(
         // map(data => data)),
        map(data => RequestActions.GetRequestDetails({requestId: action.requestID})),
        tap( data => this.messageService.successMessage('تم إضافة المرفق بنجاح')))
      )
    );
  });

  deleteTransactionRequestAttachment$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(TransactionRequestAttachmentActions.deleteTransactionRequestAttachment),
      concatMap((action) =>
        this.requestAttachmentService.deleteRequestAttachment(action.id).pipe(
          map(data => TransactionRequestAttachmentActions.deleteTransactionRequestAttachmentSuccess({ id: action.id })))
      )
    );
  });

  constructor(private actions$: Actions,
              private requestAttachmentService: RequestAttachmentService,
              private messageService: MessageService) {}

}
