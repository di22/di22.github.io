import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarryingLaborCostCommitmentRoutingModule } from './carrying-labor-cost-commitment-routing.module';
import { CarryingLaborCostCommitmentComponent } from './carrying-labor-cost-commitment/carrying-labor-cost-commitment.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [CarryingLaborCostCommitmentComponent],
  imports: [
    CommonModule,
    CarryingLaborCostCommitmentRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class CarryingLaborCostCommitmentModule { }
