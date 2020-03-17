import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarriageCarryingDutiesCommitmentsComponent } from './marriage-carrying-duties-commitments/marriage-carrying-duties-commitments.component';

const routes: Routes = [
  { path: '', component: MarriageCarryingDutiesCommitmentsComponent, data: { breadcrumb: 'تعهد تحمل تكاليف زواج', transactionId: 16801 }   },
  { path: ':requestId', component: MarriageCarryingDutiesCommitmentsComponent, data: { breadcrumb: 'تعهد تحمل تكاليف زواج', transactionId: 16801 }   }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarriageCarryingDutiesCommitmentsRoutingModule { }
