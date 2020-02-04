import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'debagaFilter',
  pure: false
})
export class DebagaFilterPipe implements PipeTransform {

  transform(value: any, args: boolean): any {
    const filteredValues = [];
    if (value.length > 0) {
       value.filter(type => {filteredValues.push(type.debagaTemplate); });
       return  filteredValues.filter(type =>  type.staticTemplate === args);
    } else {
      return [];
    }
  }

}
