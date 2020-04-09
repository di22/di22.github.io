import {CalcFees} from './CalcFees';
import {Observable} from 'rxjs';
import * as fromCustomerSelectors from '../common/parties/party/store/customer/selectors/customer.selectors';
import {Store} from '@ngrx/store';
import {State} from '../store';
import * as fromRelativesSelectors from '../store/general/lookups/relatives/selectors/relatives.selectors';
import {Relative} from '../DTO`s/relative';
import * as fromRequestDebagaSelectors from '../common/components/debaga/store/selectors/request-debaga.selectors';


export class PartiesFeesService implements CalcFees{
  private customers = [];
  private relatives: Relative[] = [];
  private relative: any;
  private relativeAmount = 0;
  private fees: number;
  private fixedValueSource: string;
  customers$: Observable<any> = this.store.select(state => fromCustomerSelectors.selectUserEntities(state));
  relatives$: Observable<any> = this.store.select(state => fromRelativesSelectors.relativesSelector(state));
  debagaFees$: Observable<any> = this.store.select(state => fromRequestDebagaSelectors.selectDebagaFees(state));
  constructor(private store: Store<State>, private transaction: any, private exceeds) {
    this.relatives$.subscribe(res => {
      this.relatives = res;
    });
    this.debagaFees$.subscribe(fee => {
      this.fees = fee;
    });
    if (this.transaction.percent && this.transaction.percent > 0) {
      this.fees = (this.transaction.percent / 100) * this.fees;
      if (this.fees > 20) this.fees = 20;
      if (this.fees < 5) this.fees = 5;
    } else {
      this.customers$.subscribe(cust => {
        this.customers = cust;
        this.customers.forEach(cust => {
          if (cust.relativeRelation) {
            this.relative = this.relatives.find(re => re.id === +cust.relativeRelation && re.className < 4);
            if (this.relative) {
              this.calcRelativeAmount();
            }
          }
        });
      });
    }
  }

  calc() {
    return {
      itemsCount: this.exceeds ? (this.exceeds + 1) : 1,        // ستعتمد مستقبلا على تكرار الفترة
      paymentAmount: this.relativeAmount? this.relativeAmount : this.fees ? this.fees : -1,    // سيتم حساب القيمة الثابتة الأصلية مبدئياً
      paymentType: {
        id: 2
      }
    };
  }
  get fixedValue () {
    if (this.transaction.percent) {
      this.fixedValueSource = 'نسبي';
    } else if (this.relative) {
      this.fixedValueSource = 'الأقارب';
    } else if (this.fees) {
      this.fixedValueSource = 'النماذج';
    } else {
      this.fixedValueSource = 'المعامله';
    }
    return this.fixedValueSource;
  }
  private calcRelativeAmount = () => {
    if (this.relative.className === 1) {
      this.relativeAmount = this.transaction.showFirstClassRelation;
    }
    if (this.relative.className === 2) {
      this.relativeAmount = this.transaction.showSecondClassRelation;
    }
    if (this.relative.className === 3) {
      this.relativeAmount = this.transaction.showThirdClassRelation;
    }
    if (this.relative.className === 4) {
      this.relativeAmount = this.transaction.showFourthClassRelation;
    }
  }
}
