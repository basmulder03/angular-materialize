import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'video[responsive]'
})
export class ResponsiveVideoDirective {

  constructor(el: ElementRef) {
    el.nativeElement.classList.add('responsive-video');
   }

}
