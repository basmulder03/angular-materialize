import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[flow]'
})
export class FlowTextDirective {

  constructor(el: ElementRef) {
    el.nativeElement.classList.add("flow-text");
   }

}
