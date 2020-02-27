import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LawyerFromPoliceComponent } from './lawyer-from-police/lawyer-from-police.component';
import {LawyerComponent} from '../lawyer/lawyer/lawyer.component';

const routes: Routes = [
  { path: '', component: LawyerFromPoliceComponent,
    data: { breadcrumb: 'توكيل محامي بناء على طلب شرطة عمان السلطانية', transactionId: 222 }},
  { path: ':requestId', component: LawyerFromPoliceComponent,
    data: { breadcrumb: 'توكيل محامي بناء على طلب شرطة عمان السلطانية', transactionId: 222 }}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LawyerFromPoliceRoutingModule { }
