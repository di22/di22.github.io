import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Directive({
  selector: '[appInputPerPage]'
})
export class InputPerPageDirective {
 // private hasView = false;
  routUrl: string;
  constructor(  private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef,
                private activatedRoute: Router) {
   this.routUrl = this.activatedRoute.url;
  }
  @Input('appInputPerPage') set mToggleInput(url: []) {
    url.some(ur => {
      if (this.routUrl.includes(ur)) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        // this.hasView = true;
      } else if (!this.routUrl.includes(ur)) {
        this.viewContainer.clear();
        // this.hasView = false;
      }
    });

  }

}
