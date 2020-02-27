import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoaSpecificComponent } from './poa-specific/poa-specific.component';

const routes: Routes = [
  { path: '', component: PoaSpecificComponent, data: { breadcrumb: 'وكالات خاصة ', transactionId: 216 }  },
  { path: ':requestId', component: PoaSpecificComponent, data: { breadcrumb: 'وكالات خاصة ', transactionId: 216 }  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoaSpecificRoutingModule { }
