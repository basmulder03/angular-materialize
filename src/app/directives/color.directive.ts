import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'color, [color]'
})
export class ColorDirective implements OnInit {

  @Input('color') color: string;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.elRef.nativeElement.classList.add(`${this.color}-text`);
  }
}
