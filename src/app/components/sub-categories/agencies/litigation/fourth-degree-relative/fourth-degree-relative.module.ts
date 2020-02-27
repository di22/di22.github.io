import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FourthDegreeRelativeRoutingModule } from './fourth-degree-relative-routing.module';
import { FourthDegreeRelativeComponent } from './fourth-degree-relative/fourth-degree-relative.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [FourthDegreeRelativeComponent],
  imports: [
    CommonModule,
    FourthDegreeRelativeRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class FourthDegreeRelativeModule { }
