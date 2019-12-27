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
    return this.transactions;
  }
}
