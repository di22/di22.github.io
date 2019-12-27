import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerParticpantType',
  pure: false
})
export class CustomerParticpantTypePipe implements PipeTransform {

  transform(value: any, args: number): any {
    if (value) {
      return value.filter(type => type.particpantType.id === args);
    } else {
      return [];
    }
  }

}
