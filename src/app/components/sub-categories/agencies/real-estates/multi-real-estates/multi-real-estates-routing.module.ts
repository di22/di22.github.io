import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiRealEstatesComponent } from './multi-real-estates/multi-real-estates.component';

const routes: Routes = [
  { path: '', component: MultiRealEstatesComponent, data: { breadcrumb: 'وكالة لعقارات متعددة', transactionId: 203}  },
  { path: ':requestId', component: MultiRealEstatesComponent, data: { breadcrumb: 'وكالة لعقارات متعددة', transactionId: 203 }}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiRealEstatesRoutingModule { }
