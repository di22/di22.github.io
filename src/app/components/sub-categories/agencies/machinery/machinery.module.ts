import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MachineryRoutingModule } from './machinery-routing.module';
import { MachineryComponent } from './machinery/machinery.component';
import {MaterialModule} from '../../../../material/material.module';
import {CommonSharedModule} from '../../../../common/common.module';


@NgModule({
  declarations: [MachineryComponent],
  imports: [
    CommonModule,
    MachineryRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class MachineryModule { }
