import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'browser-default, [browser-default]'
})
export class BrowserDefaultDirective {

  constructor(private elRef: ElementRef) {
    elRef.nativeElement.classList.add('browser-default');
  }

}
