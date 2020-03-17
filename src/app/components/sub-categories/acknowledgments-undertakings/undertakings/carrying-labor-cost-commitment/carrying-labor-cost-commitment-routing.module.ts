import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarryingLaborCostCommitmentComponent } from './carrying-labor-cost-commitment/carrying-labor-cost-commitment.component';

const routes: Routes = [
  { path: '', component: CarryingLaborCostCommitmentComponent, data: { breadcrumb: 'تعهد بتحمل تكاليف عامل', transactionId: 94 }  },
  { path: ':requestId', component: CarryingLaborCostCommitmentComponent, data: { breadcrumb: 'تعهد بتحمل تكاليف عامل', transactionId: 94 }  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarryingLaborCostCommitmentRoutingModule { }
