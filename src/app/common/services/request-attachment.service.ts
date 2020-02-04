import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType, HttpHeaders} from '@angular/common/http';
import {CommonService} from '../../services/config/common.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestAttachmentService {

  URL: string;
  constructor(private http: HttpClient,
              private commonService: CommonService) {
    this.URL =  this.commonService.getURL('request');
  }

  addRequestAttachment = (attachment) => {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'undefined'
      })
    };
    const fd = new FormData();
    fd.append('data.requestId', attachment.requestId);
    fd.append('data.attachmentTypeId', `${attachment.attachmentTypeId}`);
    fd.append('data.files', attachment.file);
    return this.http.post<any>(`${this.URL}upload-files.do`, fd, httpOptions);
  }
  getRequestAttachments = (attachment) => {
    return this.http.post<any>(`${this.URL}get-request-details.do`, attachment);
  }
  deleteRequestAttachment = (attachment) => {
    return this.http.post<any>(`${this.URL}delete-file.do`, attachment);
  }

  private getEventMessage(event: HttpEvent<any>, attachment) {

    switch (event.type) {
      case HttpEventType.UploadProgress:
        return this.fileUploadProgress(event);
        break;
      case HttpEventType.Response:
        return this.apiResponse(event);
        break;
      default:
        return `File "${attachment.get('data.files')}" surprising upload event: ${event.type}.`;
    }
  }
  private fileUploadProgress(event) {
    const percentDone = Math.round(100 * event.loaded / event.total);
    return { status: 'progress', message: percentDone };
  }

  private apiResponse(event) {
    return event.body;
  }
}
