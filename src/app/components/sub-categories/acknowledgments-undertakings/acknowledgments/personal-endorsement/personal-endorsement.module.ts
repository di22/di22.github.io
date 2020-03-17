import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalEndorsementRoutingModule } from './personal-endorsement-routing.module';
import { PersonalEndorsementComponent } from './personal-endorsement/personal-endorsement.component';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [PersonalEndorsementComponent],
  imports: [
    CommonModule,
    PersonalEndorsementRoutingModule,
    CommonSharedModule
  ]
})
export class PersonalEndorsementModule { }
