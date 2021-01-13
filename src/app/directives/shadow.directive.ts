import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[shadow]'
})
export class ShadowDirective implements OnInit{
  @Input('shadow') shadow: number;

  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    this.el.nativeElement.classList.add(`z-depth-${this.shadow}`);
  }

}
