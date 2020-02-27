import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaleShareComponent } from './sale-share/sale-share.component';

const routes: Routes = [
  { path: '', component: SaleShareComponent, data: { breadcrumb: 'وكالة الأسهم', transactionId: 205 } },
  { path: ':requestId', component: SaleShareComponent, data: { breadcrumb: 'وكالة الأسهم', transactionId: 205 } }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleShareRoutingModule { }
