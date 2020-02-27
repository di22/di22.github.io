import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GovernmentAgencyComponent } from './government-agency/government-agency.component';

const routes: Routes = [
  { path: '', component: GovernmentAgencyComponent, data: { breadcrumb: 'وكالات الجهات الحكومية'} },
  { path: 'POA_HOLDS_MANAGEMENT', loadChildren: () => import('./holds-mangment/holds-mangment.module').then(m => m.HoldsMangmentModule) },
  { path: 'POA_PUBLIC_COUNCILS', loadChildren: () => import('./public-councils/public-councils.module').then(m => m.PublicCouncilsModule) }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GovernmentAgencyRoutingModule { }
