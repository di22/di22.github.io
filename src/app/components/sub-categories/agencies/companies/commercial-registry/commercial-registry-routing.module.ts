import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommercialRegistryComponent } from './commercial-registry/commercial-registry.component';

const routes: Routes = [
  { path: '', component: CommercialRegistryComponent, data: { breadcrumb: 'وكالة لتأسيس شركة/مؤسسة', transactionId: 207 } },
  { path: ':requestId', component: CommercialRegistryComponent, data: { breadcrumb: 'وكالة لتأسيس شركة/مؤسسة', transactionId: 207 } }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercialRegistryRoutingModule { }
