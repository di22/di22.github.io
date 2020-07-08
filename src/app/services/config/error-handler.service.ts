import {ErrorHandler, Injectable} from '@angular/core';
import {MessageService} from './message.service';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(private errorMessage: MessageService) { }

  handleError(error: HttpErrorResponse): void {
    this.errorMessage.errorMessage(error);
  }
}
