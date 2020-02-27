import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiRealEstatesRoutingModule } from './multi-real-estates-routing.module';
import { MultiRealEstatesComponent } from './multi-real-estates/multi-real-estates.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [MultiRealEstatesComponent],
  imports: [
    CommonModule,
    MultiRealEstatesRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class MultiRealEstatesModule { }
