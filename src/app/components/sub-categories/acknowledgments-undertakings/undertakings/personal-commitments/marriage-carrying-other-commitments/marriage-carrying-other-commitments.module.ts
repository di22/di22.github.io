import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarriageCarryingOtherCommitmentsRoutingModule } from './marriage-carrying-other-commitments-routing.module';
import { MarriageCarryingOtherCommitmentsComponent } from './marriage-carrying-other-commitments/marriage-carrying-other-commitments.component';
import {MaterialModule} from '../../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../../common/common.module';


@NgModule({
  declarations: [MarriageCarryingOtherCommitmentsComponent],
  imports: [
    CommonModule,
    MarriageCarryingOtherCommitmentsRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class MarriageCarryingOtherCommitmentsModule { }
