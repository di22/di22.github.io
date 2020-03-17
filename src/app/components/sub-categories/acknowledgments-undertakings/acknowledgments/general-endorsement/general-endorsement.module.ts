import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralEndorsementRoutingModule } from './general-endorsement-routing.module';
import { GeneralEndorsementComponent } from './general-endorsement/general-endorsement.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [GeneralEndorsementComponent],
  imports: [
    CommonModule,
    GeneralEndorsementRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class GeneralEndorsementModule { }
