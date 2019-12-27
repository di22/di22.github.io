import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as InboxActions from '../actions/inbox.actions';
import {InboxService} from '../../../../../services/inbox.service';



@Injectable()
export class InboxEffects {

  loadInboxs$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(InboxActions.loadInbox),
      concatMap((action) =>
        this.inboxService.searchExternalDraftRequest(action.data).pipe(
          map((data: any) => data.data.searchResults.externalRequests.results),
          map(data => InboxActions.loadInboxSuccess({ data })),
          catchError(error => of(InboxActions.loadInboxFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions,
              private inboxService: InboxService) {}

}
