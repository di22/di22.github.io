import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarryingResponsabilityCommitmentComponent } from './carrying-responsability-commitment/carrying-responsability-commitment.component';

const routes: Routes = [
  { path: '', component: CarryingResponsabilityCommitmentComponent, data: { breadcrumb: 'تعهد بتحمل المسئولية', transactionId: 93 } },
  { path: ':requestId', component: CarryingResponsabilityCommitmentComponent, data: { breadcrumb: 'تعهد بتحمل المسئولية', transactionId: 93 } }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarryingResponsabilityCommitmentRoutingModule { }
