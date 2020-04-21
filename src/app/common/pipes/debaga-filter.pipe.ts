import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'debagaFilter',
  pure: true
})
export class DebagaFilterPipe implements PipeTransform {

  transform(value: any, args: boolean): any {
    let filteredValues = [];
    if (value.length > 0) {
       value.filter(type => {filteredValues.push(type.debagaTemplate); });
      filteredValues = filteredValues.filter(type =>  type.staticTemplate === args);
    }
    return filteredValues;
  }

}
