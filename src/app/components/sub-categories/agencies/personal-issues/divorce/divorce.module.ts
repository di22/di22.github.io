import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivorceRoutingModule } from './divorce-routing.module';
import { DivorceComponent } from './divorce/divorce.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [DivorceComponent],
  imports: [
    CommonModule,
    DivorceRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class DivorceModule { }
