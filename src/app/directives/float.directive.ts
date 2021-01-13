import { Float } from './../enums/float.enum';
import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: 'float, [float]'
})
export class FloatDirective implements OnInit {

  @Input('float') float: Float;

  constructor(private elRef: ElementRef) { }
  ngOnInit(): void {
    console.log(this.float);
    this.elRef.nativeElement.classList.add(this.float);
  }

}
