import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClearingWorkersTransactionsRoutingModule } from './clearing-workers-transactions-routing.module';
import { ClearingWorkersTransactionsComponent } from './clearing-workers-transactions/clearing-workers-transactions.component';
import {MaterialModule} from '../../../../material/material.module';
import {CommonSharedModule} from '../../../../common/common.module';


@NgModule({
  declarations: [ClearingWorkersTransactionsComponent],
  imports: [
    CommonModule,
    ClearingWorkersTransactionsRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class ClearingWorkersTransactionsModule { }
