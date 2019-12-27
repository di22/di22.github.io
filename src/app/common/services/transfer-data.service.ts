import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TransactionCategories} from '../data/transactionCategories';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {
  private subject = new BehaviorSubject<any>('');
  item$: Observable<any> = this.subject.asObservable();
  transactionCategories: TransactionCategories = new TransactionCategories();
  constructor() { }
  get getMarriageTransactions() {
   return  this.subject.next(this.transactionCategories.marriageTransactions);
  }
}
