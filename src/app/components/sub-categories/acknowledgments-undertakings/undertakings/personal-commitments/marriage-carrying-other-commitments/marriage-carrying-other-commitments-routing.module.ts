import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarriageCarryingOtherComponent } from './marriage-carrying-other-commitments/marriage-carrying-other.component';

const routes: Routes = [
  { path: '', component: MarriageCarryingOtherComponent, data: { breadcrumb: 'تعهد تكفل بنفقات زوجة الغير', transactionId: 16802 }  },
  { path: ':requestId', component: MarriageCarryingOtherComponent, data: { breadcrumb: 'تعهد تكفل بنفقات زوجة الغير', transactionId: 16802 }  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarriageCarryingOtherCommitmentsRoutingModule { }
