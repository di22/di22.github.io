import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcknowledgmentsUndertakingsRoutingModule } from './acknowledgments-undertakings-routing.module';
import { AcknowledgmentsUndertakingsComponent } from './acknowledgments-undertakings/acknowledgments-undertakings.component';
import {CommonSharedModule} from '../../../common/common.module';


@NgModule({
  declarations: [AcknowledgmentsUndertakingsComponent],
  imports: [
    CommonModule,
    AcknowledgmentsUndertakingsRoutingModule,
    CommonSharedModule
  ]
})
export class AcknowledgmentsUndertakingsModule { }
