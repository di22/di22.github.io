import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClearingWorkersTransactionsComponent } from './clearing-workers-transactions/clearing-workers-transactions.component';

const routes: Routes = [
  { path: '', component: ClearingWorkersTransactionsComponent, data: { breadcrumb: 'وكالة تخليص اجراءات عمالة', transactionId: 211 } },
  { path: ':requestId', component: ClearingWorkersTransactionsComponent, data: { breadcrumb: 'وكالة تخليص اجراءات عمالة', transactionId: 211 } }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClearingWorkersTransactionsRoutingModule { }
