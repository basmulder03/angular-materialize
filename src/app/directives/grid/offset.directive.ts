import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'offset, [offset]'
})
export class OffsetDirective implements OnInit {

  @Input('offset') offset: string;

  constructor(private elRef: ElementRef) { }
  ngOnInit(): void {
    this.elRef.nativeElement.classList.add(`offset-${this.offset}`);
  }

}
