import {CalcFees} from './CalcFees';


export class RequestFeesService implements CalcFees{

  constructor() { }

  calc() {
    return 'request';
  }
}
