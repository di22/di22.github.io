import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealEstatesRoutingModule } from './real-estates-routing.module';
import { RealEstatesComponent } from './real-estates/real-estates.component';
import {OneRealEstatesModule} from './one-real-estates/one-real-estates.module';
import {MaterialModule} from '../../../../material/material.module';
import {CommonSharedModule} from '../../../../common/common.module';


@NgModule({
  declarations: [RealEstatesComponent],
  imports: [
    CommonModule,
    RealEstatesRoutingModule,
    OneRealEstatesModule,
    CommonModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class RealEstatesModule { }
