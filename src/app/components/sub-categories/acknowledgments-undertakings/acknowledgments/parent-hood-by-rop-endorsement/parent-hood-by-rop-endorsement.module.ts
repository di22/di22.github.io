import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentHoodByRopEndorsementRoutingModule } from './parent-hood-by-rop-endorsement-routing.module';
import { ParentHoodByRopEndorsementComponent } from './parent-hood-by-rop-endorsement/parent-hood-by-rop-endorsement.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [ParentHoodByRopEndorsementComponent],
  imports: [
    CommonModule,
    ParentHoodByRopEndorsementRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class ParentHoodByRopEndorsementModule { }
