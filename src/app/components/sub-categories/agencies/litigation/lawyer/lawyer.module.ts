import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LawyerRoutingModule } from './lawyer-routing.module';
import { LawyerComponent } from './lawyer/lawyer.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [LawyerComponent],
  imports: [
    CommonModule,
    LawyerRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class LawyerModule { }
