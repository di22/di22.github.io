import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './components/categories/categories.component';
import {RouterModule} from '@angular/router';
import { FirstPartyComponent } from './parties/first-party/first-party.component';
import { SecondPartyComponent } from './parties/second-party/second-party.component';
import { WitnessesComponent } from './parties/witnesses/witnesses.component';
import { DebagaComponent } from './components/debaga/debaga.component';
import {MaterialModule} from '../material/material.module';

import { AdminTypesPipe } from './pipes/admin-types.pipe';
import { PartyComponent } from './parties/party/party.component';
import { EffectsModule } from '@ngrx/effects';
import { RequestEffects } from './parties/party/store/request/effects/request.effects';
import {StoreModule} from '@ngrx/store';
import {reducerProvider, reducers, REDUCERS_TOKEN} from './store';
import { CustomerEffects } from './parties/party/store/customer/effects/customer.effects';
import { CustomerParticpantTypePipe } from './pipes/customer-particpant-type.pipe';
import {DirectivesModule} from '../directives-module/directives.module';
import { BasicDataComponent } from './components/debaga/basic-data/basic-data.component';
import { OptionalDataComponent } from './components/debaga/optional-data/optional-data.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    FirstPartyComponent,
    SecondPartyComponent,
    WitnessesComponent,
    DebagaComponent,
    AdminTypesPipe,
    PartyComponent,
    CustomerParticpantTypePipe,
    BasicDataComponent,
    OptionalDataComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    FlexModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    DirectivesModule,
    // StoreModule.forFeature('common', {common: REDUCERS_TOKEN}),
    EffectsModule.forFeature([RequestEffects, CustomerEffects])
  ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        FlexLayoutModule,
        FlexModule,
        BrowserAnimationsModule,
        CategoriesComponent,
        FirstPartyComponent,
        AdminTypesPipe,
        SecondPartyComponent,
        DirectivesModule,
        WitnessesComponent
    ],
  providers: [reducerProvider]
})
export class CommonSharedModule { }
