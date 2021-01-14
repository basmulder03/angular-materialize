import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'img[circle]'
})
export class ImgCirclularDirective {

  constructor(private elRef: ElementRef) {
    elRef.nativeElement.classList.add('circle');
   }

}
