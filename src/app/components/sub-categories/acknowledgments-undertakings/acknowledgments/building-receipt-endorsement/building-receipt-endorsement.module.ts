import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildingReceiptEndorsementRoutingModule } from './building-receipt-endorsement-routing.module';
import { BuildingReceiptEndorsementComponent } from './building-receipt-endorsement/building-receipt-endorsement.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [BuildingReceiptEndorsementComponent],
  imports: [
    CommonModule,
    BuildingReceiptEndorsementRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class BuildingReceiptEndorsementModule { }
