import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoaMultiRoutingModule } from './poa-multi-routing.module';
import { PoaMultiComponent } from './poa-multi/poa-multi.component';
import {MaterialModule} from '../../../../material/material.module';
import {CommonSharedModule} from '../../../../common/common.module';


@NgModule({
  declarations: [PoaMultiComponent],
  imports: [
    CommonModule,
    PoaMultiRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class PoaMultiModule { }
