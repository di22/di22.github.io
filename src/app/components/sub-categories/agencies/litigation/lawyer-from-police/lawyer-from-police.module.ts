import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LawyerFromPoliceRoutingModule } from './lawyer-from-police-routing.module';
import { LawyerFromPoliceComponent } from './lawyer-from-police/lawyer-from-police.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [LawyerFromPoliceComponent],
  imports: [
    CommonModule,
    LawyerFromPoliceRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class LawyerFromPoliceModule { }
