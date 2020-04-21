import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getColumnsFromDebaga',
  pure: false
})
export class GetColumnsFromDebagaPipe implements PipeTransform {

  transform(value: any): any {
    let filteredValues = [];
    const filteredColumns = [];
    if (value && value.length > 0) {
      filteredValues = value;
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
