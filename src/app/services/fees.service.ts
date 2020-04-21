
import {CalcFees} from './CalcFees';


export class FeesService {
fees: CalcFees;
  constructor(fees: CalcFees) {
    this.fees = fees;
  }
 showFees = () => {
    return this.fees.calc();
  }
}
