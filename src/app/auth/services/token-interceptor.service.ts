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
    if (!req.url.includes('login') && !req.url.includes('QueryROP.ashx')) {
      if (req.url.includes('notary')) {
        req = req.clone({
          setHeaders: {
            Authorization: `${token}`
          }
        });
      } else {
        req = req.clone({
          setHeaders: {
            'X-Auth-Token': `${token}`
          }
        });
      }
    }
    return next.handle(req);
  }
}
