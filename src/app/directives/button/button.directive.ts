import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'a[btn], button, link[btn]'
})
export class ButtonDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.classList.add('btn');
   }

}
