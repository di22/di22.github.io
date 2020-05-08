import {IFees} from './IFees';
import {Store} from '@ngrx/store';
import {State} from '../../store';
import {PartiesFees} from './Parties-Fees';
import {Basic_Debaga_Fees} from './Basic_Debaga_Fees';
import {Optional_Debaga_Fees} from './Optional_Debaga_Fees';

export class CFees {
  fees: IFees;
  fixedValueSource: string;

  constructor(store: Store<State>) {
    const partiesFees = new PartiesFees(store);
    const basicDebagaFees = new Basic_Debaga_Fees(store);
    const optionalDebagaFees = new Optional_Debaga_Fees(store);
    if (basicDebagaFees.fees()) {
      this.fees = basicDebagaFees;
      this.fixedValueSource = 'نسبي';
    } else if (partiesFees.fees()) {
      this.fees = partiesFees;
      this.fixedValueSource = 'الأقارب';
    } else if (optionalDebagaFees.fees()) {
     this.fees = optionalDebagaFees;
      this.fixedValueSource = 'النماذج';
    } else {
      this.fixedValueSource = 'المعامله';
    }
  }
  getFees = () => this.fees?.fees();

}
