import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'a[float], button[float], link[float]'
})
export class FloatingDirective {

  constructor(el: ElementRef) {
    el.nativeElement.classList.add('btn-floating');
  }

}
