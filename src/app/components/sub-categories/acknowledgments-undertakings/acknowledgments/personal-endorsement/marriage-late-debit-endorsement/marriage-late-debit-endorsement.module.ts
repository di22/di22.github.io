import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarriageLateDebitEndorsementRoutingModule } from './marriage-late-debit-endorsement-routing.module';
import { MarriageLateDebitEndorsementComponent } from './marriage-late-debit-endorsement/marriage-late-debit-endorsement.component';
import {MaterialModule} from '../../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../../common/common.module';


@NgModule({
  declarations: [MarriageLateDebitEndorsementComponent],
  imports: [
    CommonModule,
    MarriageLateDebitEndorsementRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class MarriageLateDebitEndorsementModule { }
