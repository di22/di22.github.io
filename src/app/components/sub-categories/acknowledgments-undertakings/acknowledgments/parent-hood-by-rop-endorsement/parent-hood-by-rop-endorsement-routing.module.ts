import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentHoodByRopEndorsementComponent } from './parent-hood-by-rop-endorsement/parent-hood-by-rop-endorsement.component';

const routes: Routes = [
  { path: '', component: ParentHoodByRopEndorsementComponent, data: { breadcrumb: 'إقرار البنوة بناء على طلب شرطة عمان السلطانية', transactionId: 92 } },
  { path: ':requestId', component: ParentHoodByRopEndorsementComponent, data: { breadcrumb: 'إقرار البنوة بناء على طلب شرطة عمان السلطانية', transactionId: 92 } }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentHoodByRopEndorsementRoutingModule { }
