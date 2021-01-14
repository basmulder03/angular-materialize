import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'table[center]'
})
export class CenteredDirective {

  constructor(el: ElementRef) {
    el.nativeElement.classList.add("centered");
  }

}
