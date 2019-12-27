import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from '../../services/config/common.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  URL: string;
  constructor(private http: HttpClient,
              private commonService: CommonService) {
    this.URL =  this.commonService.getURL('procuration');
  }
  createCustomer = (obj) => {
   return this.http.post<any>(`${this.URL}add-procuration-customer.do`, obj);
  }
  updateCustomer = (obj) => {
    return this.http.post<any>(`${this.URL}update-procuration-customer.do`, obj);
  }
  searchProcurationCustomerChilds = (obj) => {
    return  this.http.post(`${this.URL}search-customer-child.do`, obj);
  }
  deleteCustomer = (id) => {
    return  this.http.post(`${this.URL}delete-procuration-customer.do`, id);
  }
}
