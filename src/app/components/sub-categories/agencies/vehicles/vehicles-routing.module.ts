import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiclesComponent } from './vehicles/vehicles.component';

const routes: Routes = [
  { path: '', component: VehiclesComponent, data: { breadcrumb: 'وكالات المركبات  '} },
  { path: 'POA_PURCHASE_SALE_VEHICLE', loadChildren: () => import('./one-vehicle/one-vehicle.module').then(m => m.OneVehicleModule) },
  { path: 'POA_PURCHASE_SALE_MULTI_VEHICLES', loadChildren: () => import('./multi-vehicles/multi-vehicles.module').then(m =>
      m.MultiVehiclesModule) }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
