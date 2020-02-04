import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getBasicDataValues'
})
export class GetBasicDataValuesPipe implements PipeTransform {

  transform(value: any, args: boolean): any {
    const filteredValues = [];
    const tableValues = [];
    if (value.length > 0) {
      value.forEach(ele => {
        if (ele.debagaTemplate.staticTemplate === args) {
          filteredValues.push(ele);
        }
      });
      value.forEach((ele, i1) => {
        const obj = {};
        filteredValues.forEach((ele2, i2) => {
          if (ele2.groupNumber === i1 + 1) {
            obj[ele2.debagaTemplate.id] = ele2.text;
          }
          });
        if (Object.entries(obj).length > 0) {
          tableValues.push(obj);
        }
      });
      return tableValues;
    } else {
      return [];
    }
  }

}
