import {IFees} from './IFees';
import {Store} from '@ngrx/store';
import {State} from '../../store';
import {Observable} from 'rxjs';
import * as fromRequestDebagaSelectors from '../components/debaga/store/selectors/request-debaga.selectors';

export class Optional_Debaga_Fees implements IFees{

  amount = 0;
  requestDebaga$: Observable<any> = this.store.select(state => fromRequestDebagaSelectors.selectAllRequestDebaga(state));


  constructor(private store: Store<State>) {
   this.requestDebaga$.subscribe(res => {
      this.amount =  res.reduce((acc, ele) => {
        if (ele.debagaTemplate.cost && ele.text && !ele.groupNumber) {
          acc += +ele.debagaTemplate.cost;
        }
        return acc;
      },0);
    });
  }

  fees(): number {
    return this.amount;
  }

}
