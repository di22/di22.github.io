import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoldsMangmentComponent } from './holds-mangement/holds-mangment.component';

const routes: Routes = [
  { path: '', component: HoldsMangmentComponent, data: { breadcrumb: 'وكالة إدارة وقف', transactionId: 204 }  },
  { path: ':requestId', component: HoldsMangmentComponent, data: { breadcrumb: 'وكالة إدارة وقف', transactionId: 204 }  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoldsMangmentRoutingModule { }
