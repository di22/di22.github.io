import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getBasicDataValues'
})
export class GetBasicDataValuesPipe implements PipeTransform {

  transform(value: any, args: boolean): any {
    let filteredValues = [];
    const tableValues = [];
    let obj = {};
    if (value.length > 0) {
      filteredValues =  value.filter(ele => ele.debagaTemplate.staticTemplate === args);
        filteredValues.reduce((acc, ele, i) => {
          if(acc == ele.groupNumber) {
            obj[ele.debagaTemplate.id] = ele;
          } else if (ele.groupNumber > acc) {
            if (Object.entries(obj).length > 0) {
              tableValues.push(obj)
            }
            obj = {};
            acc = ele.groupNumber;
            obj[ele.debagaTemplate.id] = ele;
          }
          if ((i + 1) === filteredValues.length) {
            tableValues.push(obj)
          }
          return acc;
        }, 1)

      return tableValues;
    } else {
      return [];
    }
  }

}
