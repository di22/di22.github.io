import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UndertakingsRoutingModule } from './undertakings-routing.module';
import { UndertakingsComponent } from './undertakings/undertakings.component';
import {CommonSharedModule} from '../../../../common/common.module';


@NgModule({
  declarations: [UndertakingsComponent],
  imports: [
    CommonModule,
    UndertakingsRoutingModule,
    CommonSharedModule
  ]
})
export class UndertakingsModule { }
