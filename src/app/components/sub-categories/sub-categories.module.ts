import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgenciesModule} from './agencies/agencies.module';
import {AcknowledgmentsUndertakingsModule} from './acknowledgments-undertakings/acknowledgments-undertakings.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AgenciesModule,
    AcknowledgmentsUndertakingsModule
  ],
  exports: [
    AgenciesModule,
    AcknowledgmentsUndertakingsModule
  ]
})
export class SubCategoriesModule { }
