import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealEstatesComponent } from './real-estates/real-estates.component';
import {OneRealEstatesComponent} from './one-real-estates/one-real-estates/one-real-estates.component';

const routes: Routes = [{ path: '', component: RealEstatesComponent, data: { breadcrumb: 'وكالات العقارات' } },
  { path: 'POA_PURCHASE_SALE_LAND',
    loadChildren: () => import('./one-real-estates/one-real-estates.module').then(m => m.OneRealEstatesModule), data: { breadcrumb: 'وكالة لعقار واحد' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealEstatesRoutingModule { }
