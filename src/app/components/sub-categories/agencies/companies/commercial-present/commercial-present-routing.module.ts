import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommercialPresentComponent } from './commercial-present/commercial-present.component';

const routes: Routes = [
  { path: '', component: CommercialPresentComponent, data: { breadcrumb: 'وكالة لشركة/مؤسسة قائمة', transactionId: 200 }  },
  { path: ':requestId', component: CommercialPresentComponent, data: { breadcrumb: 'وكالة لشركة/مؤسسة قائمة', transactionId: 200 }  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercialPresentRoutingModule { }
