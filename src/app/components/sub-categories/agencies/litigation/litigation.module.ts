import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LitigationRoutingModule } from './litigation-routing.module';
import { LitigationComponent } from './litigation/litigation.component';
import {MaterialModule} from '../../../../material/material.module';
import {CommonSharedModule} from '../../../../common/common.module';


@NgModule({
  declarations: [LitigationComponent],
  imports: [
    CommonModule,
    LitigationRoutingModule,
    CommonModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class LitigationModule { }
