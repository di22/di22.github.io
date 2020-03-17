import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DebitEndorsementComponent } from './debit-endorsement/debit-endorsement.component';

const routes: Routes = [
  { path: '', component: DebitEndorsementComponent, data: { breadcrumb: 'إقرار بدين في الذمة', transactionId: 82 }  },
  { path: ':requestId', component: DebitEndorsementComponent, data: { breadcrumb: 'إقرار بدين في الذمة', transactionId: 82 }  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebitEndorsementRoutingModule { }
