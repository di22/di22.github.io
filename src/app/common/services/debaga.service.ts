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
    this.URL =  this.commonService.getURL('transaction');
  }

  getDebagas = (obj) => {
    return  this.http.post(`${this.URL}get-transaction-debaga-templates.do`, obj);
  }
  createDebaga = (obj) => {
    return this.http.post<any>(`${this.URL}add-procuration-customer.do`, obj);
  }
  updateDebaga = (obj) => {
    return this.http.post<any>(`${this.URL}update-procuration-customer.do`, obj);
  }
  deleteDebaga = (id) => {
    return  this.http.post(`${this.URL}delete-procuration-customer.do`, id);
  }
}
