import {loadMainCategories} from '../store/general/categories/main-categories.actions';
import {Store} from '@ngrx/store';
import {State} from '../store';
import {Observable} from 'rxjs';
import * as fromTransactionCategoriesSelector from '../store/general/categories/main-categories-selector';
import * as fromConfigSelectors from '../store/general/config/config-selector';
import {TransactionsFlatPipe} from '../pipes-module/transactions-flat.pipe';
import {SetTransaction} from '../store/general/config/config.actions';


export class TransactionService {

   transaction: any;
   expirationPeriodCount: any;
   expirationPeriod: any;

  private transactionId: number;
  private expiryDate: any;
  private transactionCategories$: Observable<any> = this.store.select(state => fromTransactionCategoriesSelector.selectCategories(state));
  private expiryDate$: Observable<any> = this.store.select(state => fromConfigSelectors.selectExpiryDate(state));
  private transactionId$: Observable<any> = this.store.select(state => fromConfigSelectors.selectTransactionId(state));


  constructor(private store: Store<State>) {
    this.transactionId$.subscribe(transactionId => {
      this.transactionId = transactionId;
      this.getTransaction();
    })


    this.expiryDate$.subscribe(ex => {
        this.expiryDate = this.stringToDate(ex);
    });
  }

  getTransaction = () => {
    this.transactionCategories$
      .subscribe(
        (transactions: any) => {
          if (transactions.length === 0) {
            this.store.dispatch(loadMainCategories());
          } else {
            if (this.transactionId) {
              this.transaction = TransactionsFlatPipe.prototype.transform(transactions).find(tr => tr.id === this.transactionId);
              this.store.dispatch(SetTransaction({transaction: this.transaction}));
              this.expirationPeriodCount = this.transaction.expirationPeriodCount ? this.transaction.expirationPeriodCount : 1;
              this.expirationPeriod = this.transaction.expirationPeriod;
            }
          }});
  }

   Exceeds (expiryDate?): number {
    const exDate: any = expiryDate ? this.stringToDate(expiryDate) : this.expiryDate;
    let endNextPeriod: any = new Date();
    const endDateArray = [];
    let countDateExceeds = 1;
    if (exDate) {
      for (let i = 0; i < this.expirationPeriodCount; i++) {
        endNextPeriod = new Date(endNextPeriod).setMonth(new Date(endNextPeriod).getMonth() + this.expirationPeriod);
        endDateArray.push(new Date(endNextPeriod));
      }
      endDateArray.forEach((e) => {
        if (exDate.setHours(0, 0, 0, 0) > e.setHours(0, 0, 0, 0)) {
          countDateExceeds++;
        }
      });
    }
    return countDateExceeds;
  };


private stringToDate = (stringDate) => {
  let date;
  if (stringDate && typeof stringDate === 'string') {
     date = stringDate.split('/');
    date = new Date(date[2], +date[1]-1, date[0]);
  } else {
    date = stringDate;
  }
  return date;
}
}
