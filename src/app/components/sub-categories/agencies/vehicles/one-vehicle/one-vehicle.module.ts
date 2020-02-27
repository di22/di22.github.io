import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneVehicleRoutingModule } from './one-vehicle-routing.module';
import { OneVehicleComponent } from './one-vehicle/one-vehicle.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [OneVehicleComponent],
  imports: [
    CommonModule,
    OneVehicleRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class OneVehicleModule { }
