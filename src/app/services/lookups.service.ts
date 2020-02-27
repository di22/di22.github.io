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
import {RequestAttachments} from '../DTO`s/requestAttachments';
import {Relative} from '../DTO`s/relative';

@Injectable({
  providedIn: 'root'
})
export class LookupsService {
URL: string;
transactionURL: string;
employeeURL: string;
  constructor(private http: HttpClient,
              private commonService: CommonService) {
   this.URL =  this.commonService.getURL('lookup');
   this.transactionURL =  this.commonService.getURL('transaction');
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
  getTransactionCustomerTypes = (id) => {
    return this.http.post<any>(`${this.transactionURL}get-transaction-cust-types.do`, id);
  }
  getAllCustomerIdTypes = () => {
    return this.http.get<CustomerIdType[] | any>(`${this.URL}get-customer-id-types.do`);
  }
  getAllExemptReasons = () => {
    return this.http.get<any>(`${this.URL}get-all-excempted-Reasons.do`);
  }
  getNotaryAdminTypes = () => {
    return this.http.get<AdminTypes[] | any>(`${this.commonService.getNotaryURL()}rest/1/notaryAdmin`, {params: {limit: '999999'}});
  }
  getAttachmentTypesByTranscationCode = (obj) => {
    return this.http.post<any>(`${this.URL}get-attachment-types-by-transcation-code.do`, obj);
  }
  getRelativesByTranscationCode = (obj) => {
    return this.http.post<any>(`${this.transactionURL}get-relatives-by-tranTypeId.do`, obj);
  }
  getLawOffices = (resourcId) => {
    return this.http.get<any>(`${this.commonService.getPortalURL()}GetRest`, {headers: {'X-resource-id': resourcId}});
  }
  getLawers = (resourcId, InstitutionId?) => {
    return this.http.get<any>(`${this.commonService.getPortalURL()}GetRest`,
      {headers: {'X-resource-id': resourcId, 'X-request-id': InstitutionId}});
  }
}
