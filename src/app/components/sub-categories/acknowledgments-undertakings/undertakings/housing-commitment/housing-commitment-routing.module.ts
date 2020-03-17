import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HousingCommitmentComponent } from './housing-commitment/housing-commitment.component';

const routes: Routes = [
  { path: '', component: HousingCommitmentComponent, data: { breadcrumb: 'تعهد بتوفير سكن', transactionId: 95 }   },
  { path: ':requestId', component: HousingCommitmentComponent, data: { breadcrumb: 'تعهد بتوفير سكن', transactionId: 95 }   }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousingCommitmentRoutingModule { }
