import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'truncate, [truncate]'
})
export class TruncateDirective {

  constructor(private elRef: ElementRef) {
    elRef.nativeElement.classList.add("truncate");
   }

}
