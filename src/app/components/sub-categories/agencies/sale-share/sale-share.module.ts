import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleShareRoutingModule } from './sale-share-routing.module';
import { SaleShareComponent } from './sale-share/sale-share.component';
import {MaterialModule} from '../../../../material/material.module';
import {CommonSharedModule} from '../../../../common/common.module';


@NgModule({
  declarations: [SaleShareComponent],
  imports: [
    CommonModule,
    SaleShareRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class SaleShareModule { }
