import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from '../../services/config/common.service';

@Injectable({
  providedIn: 'root'
})
export class DebagaService {
  URL: string;
  constructor(private http: HttpClient,
              private commonService: CommonService) {
    this.URL =  this.commonService.getURL('request');
  }

  getDebagas = (obj) => {
    return  this.http.post(`${this.URL}get-transaction-debaga-templates.do`, obj);
  }
  createDebaga = (obj) => {
    return this.http.post<any>(`${this.URL}add-debaga.do`, obj);
  }
  createRequestDebaga = (obj) => {
    return this.http.post<any>(`${this.URL}add-request-debaga.do`, obj);
  }
  updateDebaga = (obj) => {
    return this.http.post<any>(`${this.URL}edit-debaga.do`, obj);
  }
  updaterequestDebaga = (obj) => {
    return this.http.post<any>(`${this.URL}update-request-debaga.do`, obj);
  }
  updateRequestDebagaByGroup = (obj) => {
    return this.http.post<any>(`${this.URL}update-request-debaga-by-group.do`, obj);
  }
  deleteRequestDebagaByGroup = (obj) => {
    return this.http.post<any>(`${this.URL}delete-request-debaga-by-group.do`, obj);
  }
}
