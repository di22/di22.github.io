import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommercialPresentRoutingModule } from './commercial-present-routing.module';
import { CommercialPresentComponent } from './commercial-present/commercial-present.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [CommercialPresentComponent],
  imports: [
    CommonModule,
    CommercialPresentRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class CommercialPresentModule { }
