import {ActivatedRoute} from '@angular/router';
import {loadMainCategories} from '../store/general/categories/main-categories.actions';
import {Store} from '@ngrx/store';
import {State} from '../store';
import {Observable} from 'rxjs';
import * as fromTransactionCategoriesSelector from '../store/general/categories/main-categories-selector';
import * as fromRequestDebagaSelectors from '../common/components/debaga/store/selectors/request-debaga.selectors';
import {TransactionsFlatPipe} from '../pipes-module/transactions-flat.pipe';


export class TransactionService {

  private transactionId: number;
  private static transactionType: any;
  private static expirationPeriodCount: number;
  private static expirationPeriod: number;
  private expiryDate: any;
  private transactionCategories$: Observable<any> = this.store.select(state => fromTransactionCategoriesSelector.selectCategories(state));
  private expiryDate$: Observable<any> = this.store.select(state => fromRequestDebagaSelectors.selectExpiryDate(state));
  constructor(private store: Store<State>, private activatedRout: ActivatedRoute) {
    this.activatedRout.data.subscribe(params => {
      this.transactionId = params.transactionId;
      this.getTransaction();
    });

    this.expiryDate$.subscribe(ex => {
        this.expiryDate = TransactionService.stringToDate(ex);
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
              TransactionService.transactionType = TransactionsFlatPipe.prototype.transform(transactions).find(tr => tr.id === this.transactionId);
              TransactionService.expirationPeriodCount = TransactionService.transaction.expirationPeriodCount ? TransactionService.transaction.expirationPeriodCount : 1;
              TransactionService.expirationPeriod = TransactionService.transaction.expirationPeriod;
            }
          }});
  }
  get transactionID () {
    return this.transactionId;
  }
static get transaction () {
    return this.transactionType;
}

get ExpiryDate () {
    return this.expiryDate;
}
  get Exceeds (): number {
    let endNextPeriod: any = new Date();
    const endDateArray = [];
    let countDateExceeds = 0;
    if (this.expiryDate) {
      for (let i = 0; i < TransactionService.expirationPeriodCount; i++) {
        endNextPeriod = new Date(endNextPeriod).setMonth(new Date(endNextPeriod).getMonth() + TransactionService.expirationPeriod);
        endDateArray.push(new Date(endNextPeriod));
      }
      endDateArray.forEach((e) => {
        if (this.expiryDate.setHours(0, 0, 0, 0) > e.setHours(0, 0, 0, 0)) {
          countDateExceeds++;
        }
      });
    }
    return countDateExceeds;
  };
  static Exceed (expiryDate): number {
     expiryDate = this.stringToDate(expiryDate);
    let endNextPeriod: any = new Date();
    const endDateArray = [];
    let countDateExceeds = 0;
    if (expiryDate) {
      for (let i = 0; i < this.expirationPeriodCount; i++) {
        endNextPeriod = new Date(endNextPeriod).setMonth(new Date(endNextPeriod).getMonth() + this.expirationPeriod);
        endDateArray.push(new Date(endNextPeriod));
      }
      endDateArray.forEach((e) => {
        if (expiryDate.setHours(0, 0, 0, 0) > e.setHours(0, 0, 0, 0)) {
          countDateExceeds++;
        }
      });
    }
    return countDateExceeds;
  };
private static stringToDate = (stringDate) => {
  let date = null;
  if (stringDate && typeof stringDate === 'string') {
     date = stringDate.split('/');
    date = new Date(date[2], +date[1]-1, date[0]);
  } else {
    date = stringDate;
  }
  return date;
}
}
