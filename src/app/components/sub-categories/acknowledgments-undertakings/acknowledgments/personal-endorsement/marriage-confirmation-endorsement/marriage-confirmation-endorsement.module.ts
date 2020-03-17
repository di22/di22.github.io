import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarriageConfirmationEndorsementRoutingModule } from './marriage-confirmation-endorsement-routing.module';
import { MarriageConfirmationEndorsementComponent } from './marriage-confirmation-endorsement/marriage-confirmation-endorsement.component';
import {MarriageCondEdorsementRoutingModule} from '../marriage-cond-edorsement/marriage-cond-edorsement-routing.module';
import {MaterialModule} from '../../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../../common/common.module';


@NgModule({
  declarations: [MarriageConfirmationEndorsementComponent],
  imports: [
    CommonModule,
    MarriageConfirmationEndorsementRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class MarriageConfirmationEndorsementModule { }
