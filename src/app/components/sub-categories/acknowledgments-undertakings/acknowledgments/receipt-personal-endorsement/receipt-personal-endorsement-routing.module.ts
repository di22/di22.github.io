import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceiptPersonalEndorsementComponent } from './receipt-personal-endorsement/receipt-personal-endorsement.component';

const routes: Routes = [
  { path: '', component: ReceiptPersonalEndorsementComponent, data: { breadcrumb: 'إقرار بدين في الذمة', transactionId: 90 } },
  { path: ':requestId', component: ReceiptPersonalEndorsementComponent, data: { breadcrumb: 'إقرار بدين في الذمة', transactionId: 90 } }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiptPersonalEndorsementRoutingModule { }
