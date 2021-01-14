import { Attribute, Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'badge',
  templateUrl: './bagde.component.html',
  styleUrls: ['./bagde.component.sass']
})
export class BagdeComponent implements OnInit, AfterViewInit {

  @Input('new') newTag: string;
  @Input('caption') caption: string;
  @Input('bg-color') color: string;

  @ViewChild("badgeSpan") el: ElementRef;

  constructor() {  }
  ngAfterViewInit(): void {
    if (this.newTag !== undefined) this.el.nativeElement.classList.add('new')
    if(this.caption !== undefined) this.el.nativeElement.setAttribute('data-badge-caption', this.caption);
    if (this.color !== undefined) this.el.nativeElement.classList.add(this.color);
  }

  ngOnInit(): void {
   }

}
