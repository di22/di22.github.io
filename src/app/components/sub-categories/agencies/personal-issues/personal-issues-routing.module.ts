import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalIssuesComponent } from './personal-issues/personal-issues.component';

const routes: Routes = [
  { path: '', component: PersonalIssuesComponent, data: { breadcrumb: 'وكالات الأحوال الشخصية' } },
  { path: 'POA_MARRIAGE_PROC', loadChildren: () => import('./finishing-marriage/finishing-marriage.module').then(m =>
      m.FinishingMarriageModule) },
  { path: 'POA_DIVORCE', loadChildren: () => import('./divorce/divorce.module').then(m => m.DivorceModule) },
  { path: 'POA_MARRIAGE', loadChildren: () => import('./marriage/marriage.module').then(m => m.MarriageModule) }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalIssuesRoutingModule { }
