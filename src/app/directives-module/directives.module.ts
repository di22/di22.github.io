import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputPerPageDirective} from './input-per-page.directive';
import { RadioButtonDirective } from './radio-button.directive';
import { RenderBasicDebagaInputsDirective } from './render-basic-debaga-inputs.directive';
import { InputLimiterDirective } from './input-limiter.directive';



@NgModule({
  declarations: [InputPerPageDirective, RadioButtonDirective, RenderBasicDebagaInputsDirective, InputLimiterDirective],
  imports: [
    CommonModule
  ],
  exports: [InputPerPageDirective, RadioButtonDirective, RenderBasicDebagaInputsDirective, InputLimiterDirective]
})
export class DirectivesModule { }
