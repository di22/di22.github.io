import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonService} from './config/common.service';

@Injectable({
  providedIn: 'root'
})
export class MainCategoriesService {
  URL: string;
  transactions = [];
  constructor(private http: HttpClient, private commonService: CommonService) {
    this.URL = this.commonService.getURL('transaction');
    this.transactions = [];
  }
  getTransactions = () => {
    return this.http.get(`${this.URL}get-transaction-categories.do?`);
  }
}
