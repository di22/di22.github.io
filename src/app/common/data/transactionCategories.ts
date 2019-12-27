export class TransactionCategories {
  marriageTransactions = ['MARRIAGE_CONTINUITY', 'MARRIAGE_REVOKE', 'MARRIAGE_CONTRACT'];
  divorceTransactions = ['DIVORCE_CONTRACT'];
  lawyerTransactions = ['POA_LAWYER'];
  marriageAndDivorceTransactions = [...this.marriageTransactions, ...this.divorceTransactions];
  constructor() {

  }
}
