import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {OneRealEstatesRoutingModule} from './one-real-estates-routing.module';
import {OneRealEstatesComponent} from './one-real-estates/one-real-estates.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [OneRealEstatesComponent],
  imports: [
    CommonModule,
    OneRealEstatesRoutingModule,
    CommonModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class OneRealEstatesModule { }
