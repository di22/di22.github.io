import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalCommitmentsRoutingModule } from './personal-commitments-routing.module';
import { PersonalCommitmentsComponent } from './personal-commitments/personal-commitments.component';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [PersonalCommitmentsComponent],
  imports: [
    CommonModule,
    PersonalCommitmentsRoutingModule,
    CommonSharedModule
  ]
})
export class PersonalCommitmentsModule { }
