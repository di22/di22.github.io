import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'requestCustomerTypePipe'
})
export class RequestCustomerTypePipe implements PipeTransform {

  transform(value: any, args): any {
    if (!args) { return  value; }
    if (!value) { return []; }
    if (args === 3) {
      return value.filter(it => it.id === 70 || it.id === 71 || it.id === 72 || it.id === 73);
    } else {
      return value;
    }
  }

}
