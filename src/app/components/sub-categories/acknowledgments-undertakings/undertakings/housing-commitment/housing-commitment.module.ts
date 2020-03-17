import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousingCommitmentRoutingModule } from './housing-commitment-routing.module';
import { HousingCommitmentComponent } from './housing-commitment/housing-commitment.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [HousingCommitmentComponent],
  imports: [
    CommonModule,
    HousingCommitmentRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class HousingCommitmentModule { }
