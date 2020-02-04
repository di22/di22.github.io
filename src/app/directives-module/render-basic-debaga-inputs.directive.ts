import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';

@Directive({
  selector: '[appRenderBasicDebagaInputs]'
})
export class RenderBasicDebagaInputsDirective {

  routUrl: string;
  constructor(  private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private activatedRoute: Router) {
   // this.routUrl = this.activatedRoute.url;
  }
  @Input('appRenderBasicDebagaInputs') set mToggleInput(ele) {
    if (ele.id === 9291) {
    if (ele.deb === 'خارج السلطنة') {
      this.viewContainer.clear();
      // this.hasView = true;
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
      // this.hasView = false;
    }
  }
  }

}
