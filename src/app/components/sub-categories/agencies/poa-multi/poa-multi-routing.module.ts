import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoaMultiComponent } from './poa-multi/poa-multi.component';

const routes: Routes = [
  { path: '', component: PoaMultiComponent, data: { breadcrumb: 'وكالة ', transactionId: 215 } },
  { path: ':requestId', component: PoaMultiComponent, data: { breadcrumb: 'وكالة ', transactionId: 215 } }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoaMultiRoutingModule { }
