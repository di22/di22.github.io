import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinishingMarriageRoutingModule } from './finishing-marriage-routing.module';
import { FinishingMarriageComponent } from './finishing-marriage/finishing-marriage.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [FinishingMarriageComponent],
  imports: [
    CommonModule,
    FinishingMarriageRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class FinishingMarriageModule { }
