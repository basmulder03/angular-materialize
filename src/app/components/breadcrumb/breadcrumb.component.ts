import { PageComponent } from './../page/page.component';
import { Component, ContentChildren, ElementRef, OnInit, QueryList, AfterViewInit, AfterContentInit, ContentChild, ViewChild, forwardRef } from '@angular/core';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.sass']
})
export class BreadcrumbComponent implements OnInit, AfterContentInit {

  @ContentChildren(PageComponent) children: QueryList<PageComponent>;

  constructor() {}
  ngAfterContentInit(): void {
    for (const child of this.children) {
      console.log(child.classes += "breadcrumb");
    }
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

}
