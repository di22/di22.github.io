import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiVehiclesRoutingModule } from './multi-vehicles-routing.module';
import { MultiVehiclesComponent } from './multi-vehicles/multi-vehicles.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [MultiVehiclesComponent],
  imports: [
    CommonModule,
    MultiVehiclesRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class MultiVehiclesModule { }
