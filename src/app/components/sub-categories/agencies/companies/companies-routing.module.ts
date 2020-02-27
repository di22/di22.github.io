import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompaniesComponent } from './companies/companies.component';

const routes: Routes = [{ path: '', component: CompaniesComponent, data: { breadcrumb: 'وكالات الشركات و المؤسسات' } },
  { path: 'POA_COMMERCIAL_PRESENT', loadChildren: () => import('./commercial-present/commercial-present.module').then(m =>
      m.CommercialPresentModule), data: { breadcrumb: 'وكالة لشركة/مؤسسة قائمة' }  },
  { path: 'POA_COMMERCIAL_REGISTRY', loadChildren: () => import('./commercial-registry/commercial-registry.module').then(m =>
      m.CommercialRegistryModule), data: { breadcrumb: 'وكالة لتأسيس شركة/مؤسسة' }  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
