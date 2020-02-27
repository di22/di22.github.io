import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicCouncilsRoutingModule } from './public-councils-routing.module';
import { PublicCouncilsComponent } from './public-councils/public-councils.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [PublicCouncilsComponent],
  imports: [
    CommonModule,
    PublicCouncilsRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class PublicCouncilsModule { }
