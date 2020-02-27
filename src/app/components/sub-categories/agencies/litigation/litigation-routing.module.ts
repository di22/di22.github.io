import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LitigationComponent } from './litigation/litigation.component';

const routes: Routes = [{ path: '', component: LitigationComponent },
  { path: 'POA_LAWYER', loadChildren: () => import('./lawyer/lawyer.module').then(m => m.LawyerModule),
    data: { breadcrumb: 'توكيل محامي' }},
  { path: 'POA_COURT', loadChildren: () => import('./lawyer-from-police/lawyer-from-police.module').then(m => m.LawyerFromPoliceModule),
    data: { breadcrumb: 'توكيل محامي بناء على طلب شرطة عمان السلطانية' }},
  { path: 'POA_FOR_RELATIVES', loadChildren: () => import('./fourth-degree-relative/fourth-degree-relative.module').then(m =>
      m.FourthDegreeRelativeModule), data: { breadcrumb: 'توكيل قريب حتي الدرجة الرابعة في التقاضي' }}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LitigationRoutingModule { }
