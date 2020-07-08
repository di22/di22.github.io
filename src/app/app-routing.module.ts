import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './core/layout/layout.component';
import {MainCategoriesComponent} from './components/main-categories/main-categories.component';
import {InboxComponent} from './components/side-menu-pages/inbox/inbox.component';
import {AuthGuardService} from './auth/services/auth-guard.service';
import {AttestationsComponent} from './components/sub-categories/attestations/attestations.component';
import {CancellationsComponent} from './components/sub-categories/cancellations/cancellations.component';
import {SellingPledgingGiftComponent} from './components/sub-categories/selling-pledging-gift/selling-pledging-gift.component';
import {PersonalAffairsComponent} from './components/sub-categories/personal-affairs/personal-affairs.component';
import {AdminDebagaComponent} from './components/side-menu-pages/admin-debaga/admin-debaga.component';
import {MyRequestsComponent} from './components/side-menu-pages/my-requests/my-requests.component';
import { FeesSettingComponent } from './components/side-menu-pages/fees-setting/fees-setting.component';
import { AdminTipesComponent } from './components/side-menu-pages/admin-tipes/admin-tipes.component';
import {SearchComponent} from './components/side-menu-pages/search/search.component';
import {TransactionTypesComponent} from './components/side-menu-pages/transaction-types/transaction-types.component';

const routes: Routes = [
 // { path: '', redirectTo: '/notary', pathMatch: 'full' },
  { path: 'notary', component: LayoutComponent, canActivate: [AuthGuardService], data: { breadcrumb: 'نظام كاتب العدل' }, children: [
      { path: 'categories', component: MainCategoriesComponent, data: { breadcrumb: 'الرئيسية' }},
      {
        path: 'Agencies',
        loadChildren: () => import('./components/sub-categories/agencies/agencies.module').then(mod =>
          mod.AgenciesModule), data: { breadcrumb: 'الوكالات' }
      },
      { path: 'acknowledgments-undertakings', loadChildren: () => import('./components/sub-categories/acknowledgments-undertakings/acknowledgments-undertakings.module').then(m => m.AcknowledgmentsUndertakingsModule), data: { breadcrumb: 'الإقرارات والتعهدات' } },
      { path: '',  component: MainCategoriesComponent, data: { breadcrumb: 'الرئيسية' }},
      { path: 'Cancellations', component: CancellationsComponent, data: { breadcrumb: 'الإلغاءات' }},
      { path: 'SellingPledgingGift', component: SellingPledgingGiftComponent, data: { breadcrumb: 'عقود البيع و الرهن و الهبه' }},
      { path: 'Personal affairs', component: PersonalAffairsComponent, data: { breadcrumb: 'الأحوال الشخصيه' }},
     /* { path: 'WillsEndowment', component: WillsEndowmentComponent, fees-package: { breadcrumb: 'الوصايا والوقف' }}, */
      { path: 'Attestations', component: AttestationsComponent, data: { breadcrumb: 'التصديقات' , transactionId: 112}},
      { path: 'Attestations/:requestId', component: AttestationsComponent, data: { breadcrumb: 'التصديقات', transactionId: 112 }},
      { path: 'inbox', component: InboxComponent, data: { breadcrumb: 'البريد الوارد' }},
      { path: 'my-requests', component: MyRequestsComponent, data: { breadcrumb: 'معاملاتى' }},
      { path: 'search', component: SearchComponent, data: { breadcrumb: 'البحث' }},
      { path: 'TransactionTypes', component: TransactionTypesComponent, data: { breadcrumb: ' إعدادت المعاملات' }},
      { path: 'adminDebaga', component: AdminDebagaComponent, data: { breadcrumb: 'قوالب التوثيق' }},
      {path:'fees-setting',component:FeesSettingComponent,data:{breadcrumb:'إعدادات الرسوم'}},
      // { path: '**', redirectTo: 'PageNotFound', pathMatch: 'full'}

      { path:  'adminTipes', component:  AdminTipesComponent},
    ]}
  // { path: 'PageNotAllowed', component: NotAllowedComponent},
 // { path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
