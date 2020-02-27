import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineryComponent } from './machinery/machinery.component';

const routes: Routes = [
  { path: '', component: MachineryComponent, data: { breadcrumb: 'وكالة الالات والمعدات', transactionId: 202 } },
  { path: ':requestId', component: MachineryComponent, data: { breadcrumb: 'وكالة الالات والمعدات', transactionId: 202 } }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MachineryRoutingModule { }
