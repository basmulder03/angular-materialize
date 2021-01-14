import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'a[flat], button[flat], link[flat]'
})
export class FlatDirective {

  constructor(el: ElementRef) {
    el.nativeElement.classList.add('btn-flat');
  }

}
