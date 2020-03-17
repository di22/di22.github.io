import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarriageCarryingDutiesCommitmentsRoutingModule } from './marriage-carrying-duties-commitments-routing.module';
import { MarriageCarryingDutiesComponent } from './marriage-carrying-duties-commitments/marriage-carrying-duties.component';
import {MaterialModule} from '../../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../../common/common.module';


@NgModule({
  declarations: [MarriageCarryingDutiesComponent],
  imports: [
    CommonModule,
    MarriageCarryingDutiesCommitmentsRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class MarriageCarryingDutiesCommitmentsModule { }
