import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule} from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import {AppComponent} from './core/home/app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonSharedModule } from './common/common.module';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { metaReducers, reducerProvider, REDUCERS_TOKEN } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { MainCategoriesComponent } from './components/main-categories/main-categories.component';
import { InboxComponent } from './components/side-menu-pages/inbox/inbox.component';
import { AttestationsComponent } from './components/sub-categories/attestations/attestations.component';
import { SellingPledgingGiftComponent } from './components/sub-categories/selling-pledging-gift/selling-pledging-gift.component';
import { CancellationsComponent } from './components/sub-categories/cancellations/cancellations.component';
import { PersonalAffairsComponent } from './components/sub-categories/personal-affairs/personal-affairs.component';
import {MainCategoriesEffects} from './store/general/categories/main-categories.effects';
import {RequestStatusEffects} from './store/general/lookups/request-status/effects/request-status.effects';
import {RequestTypeEffects} from './store/general/lookups/request-types/effects/request-type.effects';
import {EmployeesEffects} from './store/general/lookups/employee/effects/employees.effects';
import {InboxEffects} from './components/side-menu-pages/inbox/store/effects/inbox.effects';
import {NationalitesEffects} from './store/general/lookups/nationalites/effects/nationalites.effects';
import {GetRequestCustomerTypeEffects} from './store/general/lookups/request-custiomer-types/effects/get-request-customer-type.effects';
import {CustiomerIdTypeEffects} from './store/general/lookups/customer-id-types/effects/custiomer-id-type.effects';
import {AdminTypeEffects} from './store/general/lookups/admin-types/effects/admin-type.effects';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {DirectivesModule} from './directives-module/directives.module';
import { AdminDebagaComponent } from './components/side-menu-pages/admin-debaga/admin-debaga.component';
import {ModalModule} from './modal/modal.module';
import { RelativesEffects } from './store/general/lookups/relatives/effects/relatives.effects';
import { LawOfficeEffects } from './store/general/lookups/law-offices/effects/law-office.effects';
import { ExemptReasonEffects } from './store/general/lookups/exemptReasons/effects/exempt-reason.effects';
import { TransactionCustTypeEffects } from './store/general/lookups/transaction-cust-types/effects/transaction-cust-type.effects';
import { UserOrgEffects } from './store/general/user-org-details/effects/user-org.effects';
import { MyRequestsComponent } from './components/side-menu-pages/my-requests/my-requests.component';
import { SubCategoriesModule } from './components/sub-categories/sub-categories.module';
import { FeesSettingComponent } from './components/side-menu-pages/fees-setting/fees-setting.component';
import { AdminTipesComponent } from './components/side-menu-pages/admin-tipes/admin-tipes.component';
import { PipesModule } from './pipes-module/pipes.module';
import {ErrorHandlerService} from './services/config/error-handler.service';
import { SearchComponent } from './components/side-menu-pages/search/search.component';
import { TransactionTypesComponent } from './components/side-menu-pages/transaction-types/transaction-types.component';





@NgModule({
  declarations: [
    MainCategoriesComponent,
    InboxComponent,
    AttestationsComponent,
    SellingPledgingGiftComponent,
    CancellationsComponent,
    PersonalAffairsComponent,
    AdminDebagaComponent,
    MyRequestsComponent,
    FeesSettingComponent,
    AdminTipesComponent,
    SearchComponent,
    TransactionTypesComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    AuthModule,
    AppRoutingModule,
    CommonSharedModule,
    DirectivesModule,
    PipesModule,
    ModalModule,
    StoreModule.forRoot(REDUCERS_TOKEN, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: false,
        strictActionSerializability: false,
      }
    }),
    EffectsModule.forRoot([MainCategoriesEffects,
      RequestStatusEffects,
      RequestTypeEffects,
      EmployeesEffects,
      InboxEffects,
      NationalitesEffects,
      GetRequestCustomerTypeEffects,
      CustiomerIdTypeEffects,
      AdminTypeEffects,
      RelativesEffects,
      LawOfficeEffects,
      ExemptReasonEffects,
      TransactionCustTypeEffects,
      UserOrgEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    SubCategoriesModule
  ],
  providers: [reducerProvider,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
   // ErrorHandlerService,
    //{provide: ErrorHandler, useClass: ErrorHandlerService}
    ],
    exports: [
        MainCategoriesComponent,
        DirectivesModule,
        ModalModule,
        // PipesModule
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
