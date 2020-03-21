import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarriageDischargeComponent } from './marriage-discharge/marriage-discharge.component';

const routes: Routes = [
  { path: '', component: MarriageDischargeComponent, data: { breadcrumb: 'تعهد عدم زواج', transactionId: 16805 }  },
  { path: ':requestId', component: MarriageDischargeComponent, data: { breadcrumb: 'تعهد عدم زواج', transactionId: 16805 }  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarriageDischargeRoutingModule { }
