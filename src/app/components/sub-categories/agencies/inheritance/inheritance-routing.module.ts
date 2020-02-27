import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InheritanceComponent } from './inheritance/inheritance.component';

const routes: Routes = [
  { path: '', component: InheritanceComponent, data: { breadcrumb: 'وكالة ورثة', transactionId: 208 }  },
  { path: ':requestId', component: InheritanceComponent, data: { breadcrumb: 'وكالة ورثة', transactionId: 208 }  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InheritanceRoutingModule { }
