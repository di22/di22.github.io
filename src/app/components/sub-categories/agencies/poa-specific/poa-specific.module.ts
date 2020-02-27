import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoaSpecificRoutingModule } from './poa-specific-routing.module';
import { PoaSpecificComponent } from './poa-specific/poa-specific.component';
import {MaterialModule} from '../../../../material/material.module';
import {CommonSharedModule} from '../../../../common/common.module';


@NgModule({
  declarations: [PoaSpecificComponent],
  imports: [
    CommonModule,
    PoaSpecificRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class PoaSpecificModule { }
