import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiptPersonalEndorsementRoutingModule } from './receipt-personal-endorsement-routing.module';
import { ReceiptPersonalEndorsementComponent } from './receipt-personal-endorsement/receipt-personal-endorsement.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [ReceiptPersonalEndorsementComponent],
  imports: [
    CommonModule,
    ReceiptPersonalEndorsementRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class ReceiptPersonalEndorsementModule { }
