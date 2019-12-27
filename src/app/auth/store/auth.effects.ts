import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {loadAuth, loadAuthFailure, loadAuthSuccess, logout} from './auth.actions';
import {catchError, exhaustMap, map, tap} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';
import {of} from 'rxjs';
import {Router} from '@angular/router';



@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
  this.actions$.pipe(ofType(loadAuth),
    exhaustMap(action =>
      this.authService.logIn(action.userName, action.password).pipe(
        map(user => loadAuthSuccess({user})),
        tap(user => sessionStorage.setItem('token', user.user.data.authToken)),
        tap(() => this.router.navigate(['/notary'])),
        catchError(error => of(loadAuthFailure({error})))
      )
    ))
  );


  logout$ = createEffect(() =>
    this.actions$.pipe(ofType(logout),
          tap(() => this.router.navigate(['/login'])),
          tap(() => sessionStorage.clear())
      ),
    {dispatch: false}
  );
  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router) {}

}
