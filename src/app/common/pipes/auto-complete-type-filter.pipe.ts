import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autoCompleteTypeFilter'
})
export class AutoCompleteTypeFilterPipe implements PipeTransform {

  transform(value: any, args: any): any{
    if (!value) { return []; }
    if (!args) { return value; }
    if (typeof args === 'object' && args.constructor === Object) {
      args = args.description.toLowerCase();
    } else {
      args = args.toLowerCase();
    }
    return value.filter( it => {
      return it?.description?.includes(args);
    });
  }

}
