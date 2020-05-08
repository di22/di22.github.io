import {IFees} from './IFees';
import {Store} from '@ngrx/store';
import {State} from '../../store';
import {Observable, zip} from 'rxjs';
import * as fromConfigSelectors from '../../store/general/config/config-selector';
import * as fromRequestDebagaSelectors from '../components/debaga/store/selectors/request-debaga.selectors';

export class Basic_Debaga_Fees implements IFees{
  amount = 0;
  transaction$: Observable<any> = this.store.select(state => fromConfigSelectors.selectTransaction(state));
  requestDebaga$: Observable<any> = this.store.select(state => fromRequestDebagaSelectors.selectAllRequestDebaga(state));


  constructor(private store: Store<State>) {
    zip(this.transaction$, this.requestDebaga$).subscribe(res => {
    const percentFees =  res[1].reduce((acc, ele) => {
        if (res[0].percentField && res[0].percentField === ele.debagaTemplate.code && ele.groupNumber) {
           acc += +ele.text;
        }
        return acc;
      },0);
      if (res[0]?.percent && percentFees) {
        this.amount = (res[0].percent / 100) * percentFees;
        if (this.amount > 20) this.amount = 20;
        if (this.amount < 5) this.amount = 5;
      }
    });

  }

  fees(): number {
    return this.amount;
  }

}
