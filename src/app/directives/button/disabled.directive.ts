import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[disabled]'
})
export class DisabledDirective {

  constructor(el: ElementRef) {
    el.nativeElement.classList.add('disabled');
  }

}
