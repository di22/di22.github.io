import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as UserOrgActions from '../actions/user-org.actions';
import {UserDetailsService} from '../../../../services/user-details.service';



@Injectable()
export class UserOrgEffects {

  loadUserOrgs$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(UserOrgActions.loadUserDetails),
      concatMap((action) =>
        this.userDetailsService.getUserDetails(action.userId).pipe(
          map(data => UserOrgActions.loadUserDetailsSuccess({ user: data })),
          catchError(error => of(UserOrgActions.loadUserOrgsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions,
              private userDetailsService: UserDetailsService) {}

}
