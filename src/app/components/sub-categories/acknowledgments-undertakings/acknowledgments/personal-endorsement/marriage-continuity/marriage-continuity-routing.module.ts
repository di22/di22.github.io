import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarriageContinuityComponent } from './marriage-continuity/marriage-continuity.component';

const routes: Routes = [
  { path: '', component: MarriageContinuityComponent, data: { breadcrumb: 'إقرار زوجين بإستمرارية الزواج', transactionId: 13004 }   },
  { path: ':requestId', component: MarriageContinuityComponent, data: { breadcrumb: 'إقرار زوجين بإستمرارية الزواج', transactionId: 13004 }   }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarriageContinuityRoutingModule { }
