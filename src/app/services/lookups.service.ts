import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from './config/common.service';
import {SearchInbox} from '../DTO`s/search-inbox';
import {RequestStatus} from '../DTO`s/request-status';
import {RequestType} from '../DTO`s/request-type';
import {Employee} from '../DTO`s/employee';
import {environment} from '../../environments/environment';
import {Nationality} from '../DTO`s/nationality';
import {RequestCustomerType} from '../DTO`s/request-customer-type';
import {CustomerIdType} from '../DTO`s/customer-id-type';
import {AdminTypes} from '../DTO`s/admin-types';

@Injectable({
  providedIn: 'root'
})
export class LookupsService {
URL: string;
employeeURL: string;
  constructor(private http: HttpClient,
              private commonService: CommonService) {
   this.URL =  this.commonService.getURL('lookup');
   this.employeeURL =  this.commonService.getURL('sak-user');
  }

  getRequestStatuses = () => {
    return this.http.get<RequestStatus[] | any>(`${this.URL}get-request-statuses.do`);
  }
  getRequestCustomerTypes = () => {
    return this.http.get<RequestType[] | any>(`${this.URL}get-request-customer-types.do`);
  }
  getAllEmployee = () => {
    const Obj = { data: { pageSize: 10000, pageNo: 1 } };
    return this.http.post<Employee[] | any>(`${this.employeeURL}get-all-employee.do`, Obj);
  }
  getAllNationalities = () => {
    return this.http.get<Nationality[] | any>(`${this.URL}get-nationalities.do`);
  }
  getAllRequestCustomerTypes = () => {
    return this.http.get<RequestCustomerType[] | any>(`${this.URL}get-request-customer-types.do`);
  }
  getAllCustomerIdTypes = () => {
    return this.http.get<CustomerIdType[] | any>(`${this.URL}get-customer-id-types.do`);
  }
  getNotaryAdminTypes = () => {
    return this.http.get<AdminTypes[] | any>(`${this.commonService.getNotaryURL()}rest/1/notaryAdmin`, {params: {limit: '999999'}});
  }
}
