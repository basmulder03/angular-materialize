import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'valign, [valign]'
})
export class ValignDirective {

  constructor(private elRef: ElementRef) {
    elRef.nativeElement.classList.add('valign-wrapper');
   }

}
