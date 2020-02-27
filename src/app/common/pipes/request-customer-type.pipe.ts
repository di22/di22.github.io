import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'requestCustomerTypePipe',
  pure: true
})
export class RequestCustomerTypePipe implements PipeTransform {

  transform(value: any, partyId: number, transactionCustType: []): any {
    let tempTypes = [];
    const tempValue = [];
    if (!partyId) { return  value; }
    if (!value) { return []; }
    tempTypes = transactionCustType.filter((it: any) => it.partyId === partyId);
    tempTypes.forEach((ele, i) => {
      const tran = value.find(v => v.id === ele.custTypeId[0]);
      tempValue.push(tran);
    });
    return tempValue;
  }

}
