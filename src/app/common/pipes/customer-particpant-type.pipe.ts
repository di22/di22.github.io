import { Pipe, PipeTransform } from '@angular/core';
import {PartiesFees} from '../fees-package/Parties-Fees';

@Pipe({
  name: 'customerParticpantType',
  pure: true
})
export class CustomerParticpantTypePipe implements PipeTransform {

  transform(value: any, args: number): any {
    if (value && value.length > 0) {
      if (args === 1) {
      }
      return value.filter(type => type.particpantType.id === args);
    } else {
      return [];
    }
  }

}
