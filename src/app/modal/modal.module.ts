import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import {MaterialModule} from '../material/material.module';
import { LawyersModalComponent } from './lawyers-modal/lawyers-modal.component';
import { AttachmentsModalComponent } from './attachments-modal/attachments-modal.component';
import { CommericalComponent } from './commerical/commerical.component';
import { FeesModalComponent } from './fees-modal/fees-modal.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { RequestAttachmentsModalComponent } from './request-attachments-modal/request-attachments-modal.component';
import { CRActionsModalComponent } from './cr-actions-modal/cr-actions-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [DeleteModalComponent,
    LawyersModalComponent,
    AttachmentsModalComponent,
    CommericalComponent,
    FeesModalComponent,
    SuccessModalComponent,
    RequestAttachmentsModalComponent,
    CRActionsModalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ModalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [DeleteModalComponent,
    LawyersModalComponent,
    AttachmentsModalComponent,
    CommericalComponent,
    FeesModalComponent,
    SuccessModalComponent,
    RequestAttachmentsModalComponent,
    CRActionsModalComponent],
  entryComponents: [DeleteModalComponent,
    LawyersModalComponent,
    AttachmentsModalComponent,
    CommericalComponent,
    FeesModalComponent,
    SuccessModalComponent,
    RequestAttachmentsModalComponent,
    CRActionsModalComponent]
})
export class ModalModule { }
