import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[bg-color]'
})
export class BgColorDirective implements OnInit {

  @Input('bg-color') color: string;

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    this.elRef.nativeElement.classList.add(this.color);
  }

}
