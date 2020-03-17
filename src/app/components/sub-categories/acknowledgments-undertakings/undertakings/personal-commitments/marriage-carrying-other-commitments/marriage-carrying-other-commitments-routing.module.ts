import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarriageCarryingOtherCommitmentsComponent } from './marriage-carrying-other-commitments/marriage-carrying-other-commitments.component';

const routes: Routes = [
  { path: '', component: MarriageCarryingOtherCommitmentsComponent, data: { breadcrumb: 'تعهد تكفل بنفقات زوجة الغير', transactionId: 16802 }  },
  { path: ':requestId', component: MarriageCarryingOtherCommitmentsComponent, data: { breadcrumb: 'تعهد تكفل بنفقات زوجة الغير', transactionId: 16802 }  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarriageCarryingOtherCommitmentsRoutingModule { }
