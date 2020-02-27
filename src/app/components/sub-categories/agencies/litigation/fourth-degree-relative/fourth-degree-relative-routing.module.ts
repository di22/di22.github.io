import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FourthDegreeRelativeComponent } from './fourth-degree-relative/fourth-degree-relative.component';
import {LawyerComponent} from '../lawyer/lawyer/lawyer.component';

const routes: Routes = [
  { path: '', component: FourthDegreeRelativeComponent,
    data: { breadcrumb: 'توكيل قريب حتي الدرجة الرابعة في التقاضي', transactionId: 212 } },
  { path: ':requestId', component: FourthDegreeRelativeComponent,
    data: { breadcrumb: 'توكيل قريب حتي الدرجة الرابعة في التقاضي', transactionId: 212 } }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FourthDegreeRelativeRoutingModule { }
