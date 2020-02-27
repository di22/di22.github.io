import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccountsRoutingModule } from './bank-accounts-routing.module';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import {MaterialModule} from '../../../../material/material.module';
import {CommonSharedModule} from '../../../../common/common.module';


@NgModule({
  declarations: [BankAccountsComponent],
  imports: [
    CommonModule,
    BankAccountsRoutingModule,
    MaterialModule,
    CommonSharedModule
  ]
})
export class BankAccountsModule { }
