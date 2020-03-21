import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarryingExpensesComponent } from './carrying-expenses/carrying-expenses.component';
import {MarriageDischargeComponent} from '../marriage-discharge/marriage-discharge/marriage-discharge.component';

const routes: Routes = [
  { path: '', component: CarryingExpensesComponent, data: { breadcrumb: 'تعهد بنفقة', transactionId: 16804 } },
  { path: ':requestId', component: CarryingExpensesComponent, data: { breadcrumb: 'تعهد بنفقة', transactionId: 16804 } }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarryingExpensesRoutingModule { }
