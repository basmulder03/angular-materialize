import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'pull, [pull]'
})
export class PullDirective implements OnInit {

  @Input('pull') pull: string;

  constructor(private elRef: ElementRef) { }
  ngOnInit(): void {
    this.elRef.nativeElement.classList.add(`pull-${this.pull}`);
  }

}
