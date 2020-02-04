import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getColumnsFromDebaga',
  pure: false
})
export class GetColumnsFromDebagaPipe implements PipeTransform {

  transform(value: any, args: boolean): any {
    const filteredValues = [];
    const filteredColumns = [];
    if (value.length > 0) {
      value.filter(type => {filteredValues.push(type.debagaTemplate); });
      filteredValues.map(type =>  type.staticTemplate === args);
      filteredValues.forEach(ele => {
        if (ele.staticTemplate) {
          filteredColumns.push(`${ele.id}`);
        }
      });
      filteredColumns.unshift('position');
        // filteredValues.map(type =>  { filteredColumns.push(type.id); });
      filteredColumns.push('edit-delete');

      return filteredColumns;
    } else {
      return [];
    }
  }

}
