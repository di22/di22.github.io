import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarriageComponent } from './marriage/marriage.component';

const routes: Routes = [
  { path: '', component: MarriageComponent, data: { breadcrumb: 'وكالة تزويج', transactionId: 16603} },
  { path: ':requestId', component: MarriageComponent, data: { breadcrumb: 'وكالة تزويج', transactionId: 16603} }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarriageRoutingModule { }
