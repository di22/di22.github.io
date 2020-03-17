import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarriageLateDebitEndorsementComponent } from './marriage-late-debit-endorsement/marriage-late-debit-endorsement.component';

const routes: Routes = [
  { path: '', component: MarriageLateDebitEndorsementComponent, data: { breadcrumb: 'إقرار دين بمؤخر الصداق', transactionId: 16703 } },
  { path: ':requestId', component: MarriageLateDebitEndorsementComponent, data: { breadcrumb: 'إقرار دين بمؤخر الصداق', transactionId: 16703 } }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarriageLateDebitEndorsementRoutingModule { }
