import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcknowledgmentsRoutingModule } from './acknowledgments-routing.module';
import { AcknowledgmentsComponent } from './acknowledgments/acknowledgments.component';
import {CommonSharedModule} from '../../../../common/common.module';


@NgModule({
  declarations: [AcknowledgmentsComponent],
  imports: [
    CommonModule,
    AcknowledgmentsRoutingModule,
    CommonSharedModule
  ]
})
export class AcknowledgmentsModule { }
