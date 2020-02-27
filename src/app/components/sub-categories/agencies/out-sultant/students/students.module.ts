import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students/students.component';
import {MaterialModule} from '../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../common/common.module';


@NgModule({
  declarations: [StudentsComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class StudentsModule { }
