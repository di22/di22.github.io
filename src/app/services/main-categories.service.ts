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
  flatTransactions = (root) => {
    for (const obj of root) {
      if (obj.childTransactionCategories) {
        this.flatTransactions(obj.childTransactionCategories);
      }
      if (obj.transactionTypes) {
        this.flatTransactions(obj.transactionTypes);
      }
      this.transactions.push(obj);
    }
    this.transactions.sort((a: any, b: any) => {
      if (a.sortOrder < b.sortOrder) {
        return -1;
      } else if (a.sortOrder > b.sortOrder) {
        return 1;
      }
      return 0;
    });
    return this.transactions;
  }
}
