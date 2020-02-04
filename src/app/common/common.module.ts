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
import {StoreModule} from '@ngrx/store';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import {reducerProvider, reducers, REDUCERS_TOKEN} from './store';
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
    GetBasicDataValuesPipe
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
    // StoreModule.forFeature('common', {common: REDUCERS_TOKEN}),
    EffectsModule.forFeature([RequestEffects, CustomerEffects, TransactionRequestAttachmentEffects]),
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
    DirectivesModule,
    WitnessesComponent,
    DebagaComponent,
    RequestAttachmentComponent
  ],
  providers: [reducerProvider],
  bootstrap: [PartyComponent]
})
export class CommonSharedModule { }
