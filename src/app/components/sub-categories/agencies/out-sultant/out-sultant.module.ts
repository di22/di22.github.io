import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutSultantRoutingModule } from './out-sultant-routing.module';
import { OutSultantComponent } from './out-sultant/out-sultant.component';
import {MaterialModule} from '../../../../material/material.module';
import {CommonSharedModule} from '../../../../common/common.module';


@NgModule({
  declarations: [OutSultantComponent],
  imports: [
    CommonModule,
    OutSultantRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class OutSultantModule { }
