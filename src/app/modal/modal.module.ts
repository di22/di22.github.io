import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import {MaterialModule} from '../material/material.module';
import { LawyersModalComponent } from './lawyers-modal/lawyers-modal.component';


@NgModule({
  declarations: [DeleteModalComponent, LawyersModalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ModalRoutingModule
  ],
  exports: [DeleteModalComponent, LawyersModalComponent],
  entryComponents: [DeleteModalComponent, LawyersModalComponent]
})
export class ModalModule { }
