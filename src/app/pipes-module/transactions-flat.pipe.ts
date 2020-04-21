import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionsFlat',
  pure: true
})
export class TransactionsFlatPipe implements PipeTransform {

  transform(root, result = []): any[] {
   const transactions = [];
    for (const obj of root) {
      result.push(obj);
      if (obj.childTransactionCategories) {
        this.transform(obj.childTransactionCategories, result);
      }
      if (obj.transactionTypes) {
        this.transform(obj.transactionTypes, result);
      }
    }
    result.sort((a: any, b: any) => {
      if (a.sortOrder < b.sortOrder) {
        return -1;
      } else if (a.sortOrder > b.sortOrder) {
        return 1;
      }
      return 0;
    });
    return result;
  }

}
