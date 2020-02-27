import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultiVehiclesComponent } from './multi-vehicles/multi-vehicles.component';

const routes: Routes = [
  { path: '', component: MultiVehiclesComponent, data: { breadcrumb: 'وكالة لمركبات متعددة', transactionId: 214 } },
  { path: ':requestId', component: MultiVehiclesComponent, data: { breadcrumb: 'وكالة لمركبات متعددة', transactionId: 214 } }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiVehiclesRoutingModule { }
