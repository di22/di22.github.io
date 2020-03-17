import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebitEndorsementRoutingModule } from './debit-endorsement-routing.module';
import { DebitEndorsementComponent } from './debit-endorsement/debit-endorsement.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [DebitEndorsementComponent],
  imports: [
    CommonModule,
    DebitEndorsementRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class DebitEndorsementModule { }
