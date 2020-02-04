import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesComponent } from './main-categories/agencies.component';
import {CommonSharedModule} from '../../../common/common.module';
import {MaterialModule} from '../../../material/material.module';


@NgModule({
  declarations: [AgenciesComponent],
  imports: [
    AgenciesRoutingModule,
    CommonModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class AgenciesModule { }
