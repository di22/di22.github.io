import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsFlatPipe } from './transactions-flat.pipe';



@NgModule({
  declarations: [TransactionsFlatPipe],
  imports: [
    CommonModule
  ],
  exports: [TransactionsFlatPipe]
})
export class PipesModule { }
