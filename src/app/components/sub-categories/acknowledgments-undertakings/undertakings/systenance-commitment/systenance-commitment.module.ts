import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystenanceCommitmentRoutingModule } from './systenance-commitment-routing.module';
import { SystenanceCommitmentComponent } from './systenance-commitment/systenance-commitment.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [SystenanceCommitmentComponent],
  imports: [
    CommonModule,
    SystenanceCommitmentRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class SystenanceCommitmentModule { }
