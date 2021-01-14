import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResponsiveTable]'
})
export class ResponsiveTableDirective {

  constructor(el: ElementRef) {
    el.nativeElement.classList.add("responsive-table");
   }

}
