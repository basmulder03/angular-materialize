import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'col, [col]'
})
export class ColDirective implements OnInit {

  @Input('col') col: string;

  constructor(private elRef: ElementRef) { }
  ngOnInit(): void {
    this.elRef.nativeElement.classList.add("col", this.col);
  }

}
