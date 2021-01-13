import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: 'shade, [shade]'
})
export class ShadeDirective implements OnInit {

  @Input('shade') shade: string;

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.elRef.nativeElement.classList.add(this.shade);
  }

}
