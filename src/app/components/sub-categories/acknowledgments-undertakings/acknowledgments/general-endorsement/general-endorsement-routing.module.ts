import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralEndorsementComponent } from './general-endorsement/general-endorsement.component';

const routes: Routes = [
  { path: '', component: GeneralEndorsementComponent, data: { breadcrumb: 'إقرار', transactionId: 113 }   },
  { path: ':requestId', component: GeneralEndorsementComponent, data: { breadcrumb: 'إقرار', transactionId: 113 }   }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralEndorsementRoutingModule { }
