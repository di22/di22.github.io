import { Pipe, PipeTransform } from '@angular/core';
import {AdminTypes} from '../../DTO`s/admin-types';

@Pipe({
  name: 'adminTypes'
})
export class AdminTypesPipe implements PipeTransform {

  transform(value: AdminTypes[], args: number): any {

      return value.filter(type => type.AdminType === args && type.IsActive === 1);
  }

}
