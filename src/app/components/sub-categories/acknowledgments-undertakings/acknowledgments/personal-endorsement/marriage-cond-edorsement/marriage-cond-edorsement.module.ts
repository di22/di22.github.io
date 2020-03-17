import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarriageCondEdorsementRoutingModule } from './marriage-cond-edorsement-routing.module';
import { MarriageCondEdorsementComponent } from './marriage-cond-edorsement/marriage-cond-edorsement.component';
import {MaterialModule} from '../../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../../common/common.module';


@NgModule({
  declarations: [MarriageCondEdorsementComponent],
  imports: [
    CommonModule,
    MarriageCondEdorsementRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class MarriageCondEdorsementModule { }
