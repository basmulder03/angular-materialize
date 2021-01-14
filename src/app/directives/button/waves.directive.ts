import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'a[waves], button[waves], link[waves]'
})
export class WavesDirective implements OnInit {

  @Input('waves') waves: string;

  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    console.log('test')
    this.el.nativeElement.classList.add('waves-effect');
    if (this.waves !== "") this.el.nativeElement.classList.add(`waves-${this.waves}`);
  }

}
