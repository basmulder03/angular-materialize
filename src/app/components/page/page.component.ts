import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {

  @Input('href') src: string;

  @Input('class') classList: string = "";

  classes: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
