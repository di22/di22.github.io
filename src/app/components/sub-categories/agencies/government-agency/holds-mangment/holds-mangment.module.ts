import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoldsMangmentRoutingModule } from './holds-mangment-routing.module';
import { HoldsMangmentComponent } from './holds-mangement/holds-mangment.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [HoldsMangmentComponent],
  imports: [
    CommonModule,
    HoldsMangmentRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class HoldsMangmentModule { }
