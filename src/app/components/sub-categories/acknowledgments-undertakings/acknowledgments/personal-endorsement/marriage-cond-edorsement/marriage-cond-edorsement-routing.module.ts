import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarriageCondEdorsementComponent } from './marriage-cond-edorsement/marriage-cond-edorsement.component';

const routes: Routes = [
  { path: '', component: MarriageCondEdorsementComponent, data: { breadcrumb: 'إقرار بشروط خاصة بالزواج', transactionId: 16701 } },
  { path: ':requestId', component: MarriageCondEdorsementComponent, data: { breadcrumb: 'إقرار بشروط خاصة بالزواج', transactionId: 16701 } }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarriageCondEdorsementRoutingModule { }
