import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'table[striped]'
})
export class StripedDirective {

  constructor(el: ElementRef) {
    el.nativeElement.classList.add("striped");
   }

}
