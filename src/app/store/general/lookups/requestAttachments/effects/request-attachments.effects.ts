import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as RequestAttachmentsActions from '../actions/request-attachments.actions';
import {LookupsService} from '../../../../../services/lookups.service';



@Injectable()
export class RequestAttachmentsEffects {

  loadRequestAttachments$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(RequestAttachmentsActions.loadRequestAttachmentss),
      concatMap((action) =>
        this.lookupsService.getAttachmentTypesByTranscationCode(action.transactionTypeCode).pipe(
          map(data => data.data.attachmentTypes),
          map(data => RequestAttachmentsActions.loadRequestAttachmentssSuccess({ data })),
          catchError(error => of(RequestAttachmentsActions.loadRequestAttachmentssFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions,
              private lookupsService: LookupsService) {}

}
