import {CalcFees} from './CalcFees';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {State} from '../store';
import * as fromRelativesSelectors from '../store/general/lookups/relatives/selectors/relatives.selectors';
import {Relative} from '../DTO`s/relative';


export class PartiesFeesService implements CalcFees{
  private relatives: Relative[] = [];
  private relativeAmount = 0;
  private static fees: number;
  private fixedValueSource: string;
  private static relative: any;
  relatives$: Observable<any> = this.store.select(state => fromRelativesSelectors.relativesSelector(state));

  constructor(private store: Store<State>, private transaction: any, private exceeds) {
    this.relatives$.subscribe(res => {
      this.relatives = res;
    });

    if (this.transaction.percent && this.transaction.percent > 0) {
      PartiesFeesService.fees = (this.transaction.percent / 100) * PartiesFeesService.fees;
      if (PartiesFeesService.fees > 20) PartiesFeesService.fees = 20;
      if (PartiesFeesService.fees < 5) PartiesFeesService.fees = 5;
    } else {
      this.getRelative();
    }
  }

  calc() {
    return {
      itemsCount: this.exceeds ? (this.exceeds + 1) : 1,        // ستعتمد مستقبلا على تكرار الفترة
      paymentAmount: this.relativeAmount? this.relativeAmount : PartiesFeesService.fees ? PartiesFeesService.fees : -1,    // سيتم حساب القيمة الثابتة الأصلية مبدئياً
      paymentType: {
        id: 2
      }
    };
  }
  get fixedValue () {
    if (this.transaction.percent) {
      this.fixedValueSource = 'نسبي';
    } else if (PartiesFeesService.relative) {
      this.fixedValueSource = 'الأقارب';
    }
    // else if (this.fees) {
   //   this.fixedValueSource = 'النماذج';
   // }
    else {
      this.fixedValueSource = 'المعامله';
    }
    return this.fixedValueSource;
  }
  private getRelative () {
    let rel = this.relatives.find(re => re.id === +PartiesFeesService.relative.relativeRelation && re.className < 4);
    if (rel) {
      this.calcRelativeAmount();
    }
  }
  private calcRelativeAmount = () => {
    if (PartiesFeesService.relative.className === 1) {
      this.relativeAmount = this.transaction.showFirstClassRelation;
    }
    if (PartiesFeesService.relative.className === 2) {
      this.relativeAmount = this.transaction.showSecondClassRelation;
    }
    if (PartiesFeesService.relative.className === 3) {
      this.relativeAmount = this.transaction.showThirdClassRelation;
    }
    if (PartiesFeesService.relative.className === 4) {
      this.relativeAmount = this.transaction.showFourthClassRelation;
    }
  }
  static set part_relative (kind) {
    this.relative = kind;
  }
  static set Fees (fees) {
     this.fees = fees;
  }
}
