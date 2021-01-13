import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: 'hide, [hide]'
})
export class HideDirective implements OnInit {

  @Input('hide') hide: string;

  constructor(private elRef: ElementRef) { }
  ngOnInit(): void {
    let className = "hide";
    if (this.hide.length) {
    const arr = this.hide.split(" ");
      if (arr.length === 1) className += `-on-${arr[0]}-only`;
      else if (arr.length === 2) className += `-on-${arr[0]}-and-${arr[1]}`;
    }
    this.elRef.nativeElement.classList.add(className);
  }

}
