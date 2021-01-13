import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'img[responsive]'
})
export class ImgResponsiveDirective {

  constructor(private elRef: ElementRef) {
    elRef.nativeElement.classList.add('responsive-img');
  }

}
