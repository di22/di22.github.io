import {ErrorHandler, Injectable, InjectionToken, Injector} from '@angular/core';
import {ErrorMessageService} from './error-message.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(private errorMessage: ErrorMessageService) { }

  handleError(error: any): void {
    this.errorMessage.errorMessage(error);
  }
}
