import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficialDocumentsRoutingModule } from './official-documents-routing.module';
import { OfficialDocumentsComponent } from './official-documents/official-documents.component';
import {MaterialModule} from '../../../../material/material.module';
import {CommonSharedModule} from '../../../../common/common.module';


@NgModule({
  declarations: [OfficialDocumentsComponent],
  imports: [
    CommonModule,
    OfficialDocumentsRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class OfficialDocumentsModule { }
