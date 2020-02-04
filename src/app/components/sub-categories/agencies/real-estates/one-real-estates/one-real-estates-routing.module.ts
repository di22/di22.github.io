import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneRealEstatesComponent } from './one-real-estates/one-real-estates.component';

const routes: Routes = [{ path: '', component: OneRealEstatesComponent, data: { breadcrumb: 'وكالة لعقار واحد', transactionId: 209}  },
  { path: ':requestId', component: OneRealEstatesComponent, data: { breadcrumb: 'وكالة لعقار واحد', transactionId: 209 }  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneRealEstatesRoutingModule { }
