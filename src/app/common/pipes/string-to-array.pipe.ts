import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToArray',
  pure: false
})
export class StringToArrayPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    let array = [];
    const result = [];
    if (value) {
      array = value.split('|');
      for (const s of array) {
        result.push(s.slice(0, s.indexOf('=')));
      }
    }

    return result;
  }

}
