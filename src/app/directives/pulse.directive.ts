import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '.btn-floating[pulse]'
})
export class PulseDirective {

  constructor(el: ElementRef) {
    el.nativeElement.classList.add('pulse');
  }

}
