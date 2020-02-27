import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {tap} from 'rxjs/operators';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService,
              private spinnerService: NgxSpinnerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    const token = this.authService.getToken();
    if (!req.url.includes('login') && !req.url.includes('QueryROP.ashx')) {
      if (req.url.includes('notary') || req.url.includes('GetRest')) {
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
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.status === 200 || event.status === 201 ||
            event.status === 400 || event.status === 404 || event.status === 500 || !event.body) {
            this.spinnerService.hide();
          }
        }
      },
      (err: any) => {
        this.spinnerService.hide();
      })
    );;
  }
}
