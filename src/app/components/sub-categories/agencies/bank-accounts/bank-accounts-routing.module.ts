import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';

const routes: Routes = [
  { path: '', component: BankAccountsComponent, data: { breadcrumb: 'وكالة الحسابات البنكية', transactionId: 206 } },
  { path: ':requestId', component: BankAccountsComponent, data: { breadcrumb: 'وكالة الحسابات البنكية', transactionId: 206 } }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankAccountsRoutingModule { }
