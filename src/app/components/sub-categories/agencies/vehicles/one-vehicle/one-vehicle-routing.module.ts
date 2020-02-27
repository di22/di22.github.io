import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneVehicleComponent } from './one-vehicle/one-vehicle.component';

const routes: Routes = [
  { path: '', component: OneVehicleComponent, data: { breadcrumb: 'وكالة لمركبة', transactionId: 213 } },
  { path: ':requestId', component: OneVehicleComponent, data: { breadcrumb: 'وكالة لمركبة', transactionId: 213 } }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneVehicleRoutingModule { }
