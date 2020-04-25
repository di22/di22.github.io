import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autoCompleteFilter'
})
export class AutoCompleteFilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (!value) { return []; }
    if (!args) { return value; }
    if (typeof args === 'object' && args.constructor === Object) {
      args = args.InstitutionName.toLowerCase();
    } else {
      args = args.toLowerCase();
    }
    return value.filter( it => {
      return it?.InstitutionName?.includes(args);
    });
  }

}
