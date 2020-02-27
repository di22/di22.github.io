import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LawyerComponent } from './lawyer/lawyer.component';

const routes: Routes = [
  { path: '', component: LawyerComponent, data: { breadcrumb: 'توكيل محامي', transactionId: 201 }  },
  { path: ':requestId', component: LawyerComponent, data: { breadcrumb: 'توكيل محامي', transactionId: 201 }  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LawyerRoutingModule { }
