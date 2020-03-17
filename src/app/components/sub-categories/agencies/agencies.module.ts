import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesComponent } from './main-categories/agencies.component';
import {CommonSharedModule} from '../../../common/common.module';


@NgModule({
  declarations: [AgenciesComponent],
  imports: [
    AgenciesRoutingModule,
    CommonModule,
    CommonSharedModule
  ]
})
export class AgenciesModule { }
