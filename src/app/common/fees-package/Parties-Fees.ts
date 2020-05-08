import {IFees} from './IFees';
import {Relative} from '../../DTO`s/relative';
import {Observable, zip} from 'rxjs';
import {Store} from '@ngrx/store';
import {State} from '../../store';
import * as fromRelativesSelectors from '../../store/general/lookups/relatives/selectors/relatives.selectors';
import * as fromConfigSelectors from '../../store/general/config/config-selector.js';
import * as fromCustomerSelectors from '../components/parties/party/store/selectors/customer.selectors';

export class PartiesFees implements IFees{

  private amount = 0;
  private relatives: Relative[] = [];
  private relative: any;
  transaction: any;
  relatives$: Observable<any> = this.store.select(state => fromRelativesSelectors.relativesSelector(state));
  transaction$: Observable<any> = this.store.select(state => fromConfigSelectors.selectTransaction(state));
  customers$: Observable<any> = this.store.select(state => fromCustomerSelectors.selectUserEntities(state));


  constructor(private store: Store<State>) {

    zip(this.customers$, this.transaction$, this.relatives$).subscribe(res => {
      this.relatives = res[2];
      if (res[0]?.length > 0 && res[1]) {
        this.relative = res[0].find(e => e.relativeRelation);
        this.transaction = res[1];
        this.getRelative();
      } else {
        this.amount = 0;
      }
    });
  }

  fees = (): number => this.amount;


  private getRelative () {
    let rel = this.relatives.find(re => re.id === +this.relative.relativeRelation && re.className < 4);
    if (rel) {
      this.calcRelativeAmount(rel);
    }
  }

  private calcRelativeAmount = (relation) => {
    if (relation.className === 1) {
      this.amount = this.transaction.showFirstClassRelation;
    }
    if (relation.className === 2) {
      this.amount = this.transaction.showSecondClassRelation;
    }
    if (relation.className === 3) {
      this.amount = this.transaction.showThirdClassRelation;
    }
    if (relation.className === 4) {
      this.amount = this.transaction.showFourthClassRelation;
    }
  }
}
