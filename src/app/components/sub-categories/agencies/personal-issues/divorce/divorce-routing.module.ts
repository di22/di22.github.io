import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivorceComponent } from './divorce/divorce.component';

const routes: Routes = [
  { path: '', component: DivorceComponent, data: { breadcrumb: 'وكالة في الطلاق', transactionId: 16602} },
  { path: ':requestId', component: DivorceComponent, data: { breadcrumb: 'وكالة في الطلاق', transactionId: 16602} }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivorceRoutingModule { }
