import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.sass']
})
export class ColComponent implements OnInit, OnChanges {

  @Input() col!: string;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.checkRequiredFields(this.col);
  }

  ngOnInit(): void {
    this.checkRequiredFields(this.col);
  }

  checkRequiredFields(input) {
    if (input === null) throw new Error(`Attribute ${input} is required`);
  }

}
