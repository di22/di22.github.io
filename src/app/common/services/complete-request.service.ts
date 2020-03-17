import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CommonService} from '../../services/config/common.service';

@Injectable({
  providedIn: 'root'
})
export class CompleteRequestService {

  URL: string;
  constructor(private http: HttpClient,
              private commonService: CommonService) { }

  invoiceEstimation = (obj) => {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept:  'application/json, text/javascript, */*;',
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(`${this.commonService.getPortalURL()}InvoiceEstimation`, obj, httpOptions);
  }
}
