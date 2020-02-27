import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InheritanceRoutingModule } from './inheritance-routing.module';
import { InheritanceComponent } from './inheritance/inheritance.component';
import {MaterialModule} from '../../../../material/material.module';
import {CommonSharedModule} from '../../../../common/common.module';


@NgModule({
  declarations: [InheritanceComponent],
  imports: [
    CommonModule,
    InheritanceRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class InheritanceModule { }
