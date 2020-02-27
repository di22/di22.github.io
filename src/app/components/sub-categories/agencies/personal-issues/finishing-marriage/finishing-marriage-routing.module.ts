import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinishingMarriageComponent } from './finishing-marriage/finishing-marriage.component';

const routes: Routes = [
  { path: '', component: FinishingMarriageComponent, data: { breadcrumb: 'وكالة في إنهاء إجراءات الزواج', transactionId: 16601} },
  { path: ':requestId', component: FinishingMarriageComponent, data: { breadcrumb: 'وكالة في إنهاء إجراءات الزواج', transactionId: 16601} }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinishingMarriageRoutingModule { }
