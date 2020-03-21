import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarryingExpensesRoutingModule } from './carrying-expenses-routing.module';
import { CarryingExpensesComponent } from './carrying-expenses/carrying-expenses.component';
import {MaterialModule} from '../../../../../../material/material.module';
import {CommonSharedModule} from '../../../../../../common/common.module';


@NgModule({
  declarations: [CarryingExpensesComponent],
  imports: [
    CommonModule,
    CarryingExpensesRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class CarryingExpensesModule { }
