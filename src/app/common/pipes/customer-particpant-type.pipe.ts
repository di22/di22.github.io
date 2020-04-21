import { Pipe, PipeTransform } from '@angular/core';
import {PartiesFeesService} from '../../services/parties-fees.service';

@Pipe({
  name: 'customerParticpantType',
  pure: true
})
export class CustomerParticpantTypePipe implements PipeTransform {

  transform(value: any, args: number): any {
    if (value && value.length > 0) {
      PartiesFeesService.part_relative = value.find(e => e.relativeRelation);
      return value.filter(type => type.particpantType.id === args);
    } else {
      return [];
    }
  }

}
