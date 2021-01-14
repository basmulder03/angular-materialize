import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'a[small], button[small], link[small]'
})
export class SmallDirective {

  constructor(el: ElementRef) {
    el.nativeElement.classList.add('btn-small');
  }

}
