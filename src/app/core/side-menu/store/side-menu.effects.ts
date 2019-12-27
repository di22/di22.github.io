import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as SideMenuActions from './side-menu.actions';



@Injectable()
export class SideMenuEffects {

  loadSideMenus$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(SideMenuActions.loadSideMenus),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => SideMenuActions.loadSideMenusSuccess({ data })),
          catchError(error => of(SideMenuActions.loadSideMenusFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
