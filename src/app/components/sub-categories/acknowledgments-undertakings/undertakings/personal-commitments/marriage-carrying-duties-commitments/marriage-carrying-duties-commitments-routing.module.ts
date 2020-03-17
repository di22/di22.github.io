import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarriageCarryingDutiesComponent } from './marriage-carrying-duties-commitments/marriage-carrying-duties.component';

const routes: Routes = [
  { path: '', component: MarriageCarryingDutiesComponent, data: { breadcrumb: 'تعهد تحمل تكاليف زواج', transactionId: 16801 }   },
  { path: ':requestId', component: MarriageCarryingDutiesComponent, data: { breadcrumb: 'تعهد تحمل تكاليف زواج', transactionId: 16801 }   }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarriageCarryingDutiesCommitmentsRoutingModule { }
