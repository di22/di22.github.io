import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgenciesComponent } from './main-categories/agencies.component';
import {OutSultantComponent} from './out-sultant/out-sultant/out-sultant.component';
import {VehiclesComponent} from './vehicles/vehicles/vehicles.component';
import {CompaniesComponent} from './companies/companies/companies.component';
import {PersonalIssuesComponent} from './personal-issues/personal-issues/personal-issues.component';

const routes: Routes = [
  { path: '', component: AgenciesComponent, data: { breadcrumb: 'الوكالات' }},
  { path: 'RealEstates', loadChildren: () => import('./real-estates/real-estates.module').then(m => m.RealEstatesModule),
    data: { breadcrumb: 'وكالات العقارات' } },
  { path: 'litigation', loadChildren: () => import('./litigation/litigation.module').then(m => m.LitigationModule),
    data: { breadcrumb: 'وكالات التقاضي' } },
  { path: 'POA_PASSPORT_ISSUANCE', loadChildren: () => import('./official-documents/official-documents.module').then(m =>
      m.OfficialDocumentsModule) },
  { path: 'companies', loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesModule),
    data: { breadcrumb: 'وكالات الشركات و المؤسسات' } },
  { path: 'POA_MACHINERY', loadChildren: () => import('./machinery/machinery.module').then(m => m.MachineryModule)},
  { path: 'POA_PURCHASE_SALE_SHARE', loadChildren: () => import('./sale-share/sale-share.module').then(m => m.SaleShareModule)},
  { path: 'POA_BANK_ACCOUNTS', loadChildren: () => import('./bank-accounts/bank-accounts.module').then(m => m.BankAccountsModule) },
  { path: 'vehicles', loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule), data: { breadcrumb: 'وكالات المركبات  '} },
  { path: 'out-sultant', loadChildren: () => import('./out-sultant/out-sultant.module').then(m => m.OutSultantModule),
   data: { breadcrumb: 'وكالات خارج السلطنة' } },
  { path: 'POA_INHERITANCE', loadChildren: () => import('./inheritance/inheritance.module').then(m => m.InheritanceModule) },
  { path: 'government-agency', loadChildren: () => import('./government-agency/government-agency.module').then(m =>
      m.GovernmentAgencyModule), data: { breadcrumb: 'وكالات الجهات الحكومية'} },
  { path: 'personal-issues-agencies', loadChildren: () => import('./personal-issues/personal-issues.module').then(m => m.PersonalIssuesModule),
   data: { breadcrumb: 'وكالات الأحوال الشخصية' } },
  { path: 'POA_CLEARING_WORKERS_TRANSACTIONS', loadChildren: () => import('./clearing-workers-transactions/clearing-workers-transactions.module').then(m => m.ClearingWorkersTransactionsModule) },
  { path: 'POA_MULTI', loadChildren: () => import('./poa-multi/poa-multi.module').then(m => m.PoaMultiModule) },
  { path: 'POA_SPECIFIC', loadChildren: () => import('./poa-specific/poa-specific.module').then(m => m.PoaSpecificModule) }
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgenciesRoutingModule { }
