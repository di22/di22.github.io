import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarryingResponsabilityCommitmentRoutingModule } from './carrying-responsability-commitment-routing.module';
import { CarryingResponsabilityCommitmentComponent } from './carrying-responsability-commitment/carrying-responsability-commitment.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [CarryingResponsabilityCommitmentComponent],
  imports: [
    CommonModule,
    CarryingResponsabilityCommitmentRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class CarryingResponsabilityCommitmentModule { }
