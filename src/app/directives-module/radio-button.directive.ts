import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRadioButton]'
})
export class RadioButtonDirective {

  constructor(private el: ElementRef,
              private render: Renderer2) { }
  @HostListener('click') mouseover(eventData: Event) {
     const element = this.el.nativeElement as HTMLElement;
     this.render.removeChild(element, element.childNodes);
  }
 // @HostListener('mouseout') mouseout(eventData: Event) {
    // const element = this.render.selectRootElement('.close-reveal-modal');
    // this.render.addClass(element,'close-reveal-modal')
 // }

}
