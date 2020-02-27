import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalIssuesRoutingModule } from './personal-issues-routing.module';
import { PersonalIssuesComponent } from './personal-issues/personal-issues.component';
import {MaterialModule} from '../../../../material/material.module';
import {CommonSharedModule} from '../../../../common/common.module';


@NgModule({
  declarations: [PersonalIssuesComponent],
  imports: [
    CommonModule,
    PersonalIssuesRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class PersonalIssuesModule { }
