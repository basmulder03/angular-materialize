import { Align } from './../enums/align.enum';
import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: 'align, [align]'
})
export class AlignDirective implements OnInit {

  @Input('align') align: Align;

  constructor(private elRef: ElementRef) { }
  ngOnInit(): void {
    this.elRef.nativeElement.classList.add(`${this.align}-align`);
  }

}
