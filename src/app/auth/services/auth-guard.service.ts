import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store';
import {authFeatureKey} from '../store/auth.reducer';
import {map, take} from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private store: Store<fromApp.State>,
              private authService: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
  return  this.store.select(stat => stat[authFeatureKey]).pipe(take(1),
    map(s => {
    if (s.authenticated || this.authService.getToken()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
    }));
  }
}
