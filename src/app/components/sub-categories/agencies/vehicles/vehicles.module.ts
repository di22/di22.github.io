import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles/vehicles.component';
import {MaterialModule} from '../../../../material/material.module';
import {CommonSharedModule} from '../../../../common/common.module';


@NgModule({
  declarations: [VehiclesComponent],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class VehiclesModule { }
