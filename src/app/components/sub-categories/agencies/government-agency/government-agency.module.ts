import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GovernmentAgencyRoutingModule } from './government-agency-routing.module';
import { GovernmentAgencyComponent } from './government-agency/government-agency.component';
import {MaterialModule} from '../../../../material/material.module';
import {CommonSharedModule} from '../../../../common/common.module';


@NgModule({
  declarations: [GovernmentAgencyComponent],
  imports: [
    CommonModule,
    GovernmentAgencyRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class GovernmentAgencyModule { }
