import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommercialRegistryRoutingModule } from './commercial-registry-routing.module';
import { CommercialRegistryComponent } from './commercial-registry/commercial-registry.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [CommercialRegistryComponent],
  imports: [
    CommonModule,
    CommercialRegistryRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class CommercialRegistryModule { }
