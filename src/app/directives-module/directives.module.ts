import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputPerPageDirective} from './input-per-page.directive';



@NgModule({
  declarations: [InputPerPageDirective],
  imports: [
    CommonModule
  ],
  exports: [InputPerPageDirective]
})
export class DirectivesModule { }
