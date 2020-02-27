import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarriageRoutingModule } from './marriage-routing.module';
import { MarriageComponent } from './marriage/marriage.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [MarriageComponent],
  imports: [
    CommonModule,
    MarriageRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class MarriageModule { }
