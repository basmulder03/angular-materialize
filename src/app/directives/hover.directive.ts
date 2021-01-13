import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'hover, [hover]'
})
export class HoverDirective {

  constructor(private elRef: ElementRef) {
    elRef.nativeElement.classList.add("hoverable")
  }

}
