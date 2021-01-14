import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'push, [push]'
})
export class PushDirective implements OnInit {

  @Input('push') push: string;

  constructor(private elRef: ElementRef) { }
  ngOnInit(): void {
    this.elRef.nativeElement.classList.add(`push-${this.push}`)
  }

}
