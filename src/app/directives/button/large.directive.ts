import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'a[large], button[large], link[large]'
})
export class LargeDirective {

  constructor(el: ElementRef) {
    el.nativeElement.classList.add('btn-large');
  }

}
