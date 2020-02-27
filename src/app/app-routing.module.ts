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
import {WillsEndowmentComponent} from './components/sub-categories/wills-endowment/wills-endowment.component';
import {AcknowledgmentsUndertakingsComponent} from './components/sub-categories/acknowledgments-undertakings/acknowledgments-undertakings.component';
import {AdminDebagaComponent} from './components/side-menu-pages/admin-debaga/admin-debaga.component';
import {MyRequestsComponent} from './components/side-menu-pages/my-requests/my-requests.component';

const routes: Routes = [
 // { path: '', redirectTo: '/notary', pathMatch: 'full' },
  { path: 'notary', component: LayoutComponent, canActivate: [AuthGuardService], data: { breadcrumb: 'نظام كاتب العدل' }, children: [
      { path: 'categories', component: MainCategoriesComponent, data: { breadcrumb: 'الرئيسية' }},
      {
        path: 'Agencies',
        loadChildren: () => import('./components/sub-categories/agencies/agencies.module').then(mod =>
          mod.AgenciesModule), data: { breadcrumb: 'الوكالات' }
      },
      { path: '',  component: MainCategoriesComponent, data: { breadcrumb: 'الرئيسية' }},
      { path: 'Cancellations', component: CancellationsComponent, data: { breadcrumb: 'الإلغاءات' }},
      { path: 'SellingPledgingGift', component: SellingPledgingGiftComponent, data: { breadcrumb: 'عقود البيع و الرهن و الهبه' }},
      { path: 'Personal affairs', component: PersonalAffairsComponent, data: { breadcrumb: 'الأحوال الشخصيه' }},
      { path: 'WillsEndowment', component: WillsEndowmentComponent, data: { breadcrumb: 'الوصايا والوقف' }},
      { path: 'AcknowledgmentsUndertakings', component: AcknowledgmentsUndertakingsComponent,
        data: { breadcrumb: 'الإقرارات والتعهدات' }},
      { path: 'Attestations', component: AttestationsComponent, data: { breadcrumb: 'التصديقات' , transactionId: 112}},
      // tslint:disable-next-line:max-line-length
      { path: 'Attestations/:requestId', component: AttestationsComponent, data: { breadcrumb: 'التصديقات', transactionId: 112 }},
      { path: 'inbox', component: InboxComponent, data: { breadcrumb: 'البريد الوارد' }},
      { path: 'my-requests', component: MyRequestsComponent, data: { breadcrumb: 'معاملاتى' }},
      { path: 'adminDebaga', component: AdminDebagaComponent, data: { breadcrumb: 'قوالب التوثيق' }},
      // { path: '**', redirectTo: 'PageNotFound', pathMatch: 'full'}
    ]} // { path: 'PageNotAllowed', component: NotAllowedComponent},
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
