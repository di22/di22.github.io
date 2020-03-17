import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystenanceCommitmentComponent } from './systenance-commitment/systenance-commitment.component';

const routes: Routes = [
  { path: '', component: SystenanceCommitmentComponent, data: { breadcrumb: 'تعهد بالإعالة', transactionId: 96 }   },
  { path: ':requestId', component: SystenanceCommitmentComponent, data: { breadcrumb: 'تعهد بالإعالة', transactionId: 96 }   }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystenanceCommitmentRoutingModule { }
