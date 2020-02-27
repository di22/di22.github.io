import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicCouncilsComponent } from './public-councils/public-councils.component';

const routes: Routes = [
  { path: '', component: PublicCouncilsComponent, data: { breadcrumb: 'وكالة إدارة مجلس عام', transactionId: 217 } },
  { path: ':requestId', component: PublicCouncilsComponent, data: { breadcrumb: 'وكالة إدارة مجلس عام', transactionId: 217 } }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicCouncilsRoutingModule { }
