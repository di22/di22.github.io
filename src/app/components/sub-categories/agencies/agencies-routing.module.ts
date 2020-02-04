import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgenciesComponent } from './main-categories/agencies.component';

const routes: Routes = [
  { path: '', component: AgenciesComponent, data: { breadcrumb: 'الوكالات' }},
  { path: 'RealEstates', loadChildren: () => import('./real-estates/real-estates.module').then(m => m.RealEstatesModule),
    data: { breadcrumb: 'وكالات العقارات' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenciesRoutingModule { }
