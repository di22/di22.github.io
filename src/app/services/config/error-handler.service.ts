import {ErrorHandler, Injectable, InjectionToken, Injector} from '@angular/core';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(private errorMessage: MessageService) { }

  handleError(error: any): void {
    this.errorMessage.errorMessage(error);
  }
}
