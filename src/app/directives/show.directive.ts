import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'show, [show]'
})
export class ShowDirective implements OnInit{

  @Input('show') show: string;

  constructor(private elRef: ElementRef) { }
  ngOnInit(): void {
    let className = "show";
    console.log(this.show);
    const arr = this.show.split(" ");
    console.log(arr.length);
    if (arr.length === 1) className += `-on-${arr[0]}`;
    else if (arr.length === 2) className += `-on-${arr[0]}-and-${arr[1]}`;
    this.elRef.nativeElement.classList.add(className);
  }
}
