import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarriageContinuityRoutingModule } from './marriage-continuity-routing.module';
import { MarriageContinuityComponent } from './marriage-continuity/marriage-continuity.component';
import {MaterialModule} from '../../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../../common/common.module';


@NgModule({
  declarations: [MarriageContinuityComponent],
  imports: [
    CommonModule,
    MarriageContinuityRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class MarriageContinuityModule { }
