import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsFlatPipe } from './transactions-flat.pipe';
import { AutoCompleteTypeFilterPipe } from '../common/pipes/auto-complete-type-filter.pipe';



@NgModule({
  declarations: [TransactionsFlatPipe,
    AutoCompleteTypeFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [TransactionsFlatPipe,
    AutoCompleteTypeFilterPipe
  ]
})
export class PipesModule { }
