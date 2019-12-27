import {Injectable, Injector} from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService,
              private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    if (!req.url.includes('login')) {
      if (req.url.includes('notary')) {
        req = req.clone({
          setHeaders: {
            Authorization: `${token}`,
            'Content-Type': 'application/json'
          }
        });
      } else {
        req = req.clone({
          setHeaders: {
            'X-Auth-Token': `${token}`,
            'Content-Type': 'application/json'
          }
        });
      }
    }
    return next.handle(req);
  }
}
