import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
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
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { CustomerEffects } from './parties/party/store/customer/effects/customer.effects';
import { CustomerParticpantTypePipe } from './pipes/customer-particpant-type.pipe';
import {DirectivesModule} from '../directives-module/directives.module';
import { BasicDataComponent } from './components/debaga/basic-data/basic-data.component';
import { OptionalDataComponent } from './components/debaga/optional-data/optional-data.component';
import { DebagaFilterPipe } from './pipes/debaga-filter.pipe';
import {StringToArrayPipe} from './pipes/string-to-array.pipe';
import { RequestAttachmentComponent } from './components/request-attachment/request-attachment.component';
import { TransactionRequestAttachmentEffects } from './components/request-attachment/store/effects/transaction-request-attachment.effects';
import { GetColumnsFromDebagaPipe } from './pipes/get-columns-from-debaga.pipe';
import { GetBasicDataValuesPipe } from './pipes/get-basic-data-values.pipe';
import { AutoCompleteFilterPipe } from './pipes/auto-complete-filter.pipe';
import { RequestCustomerTypePipe } from './pipes/request-customer-type.pipe';
import { CompleteRequestComponent } from './components/complete-request/complete-request.component';
import {DebagaEffects} from '../components/side-menu-pages/admin-debaga/store/effects/debaga.effects';
import {RequestDebagaEffects} from './components/debaga/store/effects/request-debaga.effects';
import {RequestAttachmentsEffects} from '../store/general/lookups/requestAttachments/effects/request-attachments.effects';
import { CompleteRequestEffects } from './components/complete-request/store/effects/complete-request.effects';
import { RequestComponent } from './components/request/request.component';
import {StoreModule} from '@ngrx/store';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';

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
    OptionalDataComponent,
    DebagaFilterPipe,
    StringToArrayPipe,
    RequestAttachmentComponent,
    GetColumnsFromDebagaPipe,
    GetBasicDataValuesPipe,
    AutoCompleteFilterPipe,
    RequestCustomerTypePipe,
    CompleteRequestComponent,
    RequestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    FlexModule,
    RouterModule,
    MaterialModule,
    DirectivesModule,
    EffectsModule.forFeature([RequestEffects, CustomerEffects, TransactionRequestAttachmentEffects,
      DebagaEffects, RequestDebagaEffects, RequestAttachmentsEffects, CompleteRequestEffects]),
    CKEditorModule
  ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        FlexLayoutModule,
        FlexModule,
        CKEditorModule,
        CategoriesComponent,
        FirstPartyComponent,
        AdminTypesPipe,
        SecondPartyComponent,
        RequestComponent,
        DirectivesModule,
        WitnessesComponent,
        DebagaComponent,
        RequestAttachmentComponent,
        CompleteRequestComponent
    ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'ar-AR'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}],
  bootstrap: []
})
export class CommonSharedModule { }
