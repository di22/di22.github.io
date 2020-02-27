import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalRoutingModule } from './modal-routing.module';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import {MaterialModule} from '../material/material.module';
import { LawyersModalComponent } from './lawyers-modal/lawyers-modal.component';
import { Mo7rrModalComponent } from './mo7rr-modal/mo7rr-modal.component';
import { CommericalComponent } from './commerical/commerical.component';


@NgModule({
  declarations: [DeleteModalComponent, LawyersModalComponent, Mo7rrModalComponent, CommericalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ModalRoutingModule
  ],
  exports: [DeleteModalComponent, LawyersModalComponent, Mo7rrModalComponent, CommericalComponent],
  entryComponents: [DeleteModalComponent, LawyersModalComponent, Mo7rrModalComponent, CommericalComponent]
})
export class ModalModule { }
