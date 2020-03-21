import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarriageDischargeRoutingModule } from './marriage-discharge-routing.module';
import { MarriageDischargeComponent } from './marriage-discharge/marriage-discharge.component';
import {MaterialModule} from '../../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../../common/common.module';


@NgModule({
  declarations: [MarriageDischargeComponent],
  imports: [
    CommonModule,
    MarriageDischargeRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class MarriageDischargeModule { }
