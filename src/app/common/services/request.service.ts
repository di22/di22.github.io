import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from '../../services/config/common.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  URL: string;
  constructor(private http: HttpClient,
              private commonService: CommonService) {
    this.URL =  this.commonService.getURL('request');
  }

  createRequest = (request) => {
    return this.http.post<any>(`${this.URL}add-request.do`, request);
  }
  getRequestDetails = (request) => {
    return this.http.post<any>(`${this.URL}get-request-details.do`, request);
  }
}
