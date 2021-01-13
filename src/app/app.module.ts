import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { RowComponent } from './components/row/row.component';
import { SectionComponent } from './components/section/section.component';
import { ColorDirective } from './directives/color.directive';
import { BgColorDirective } from './directives/bg-color.directive';
import { ShadeDirective } from './directives/shade.directive';
import { ColDirective } from './directives/col.directive';
import { OffsetDirective } from './directives/offset.directive';
import { PushDirective } from './directives/push.directive';
import { PullDirective } from './directives/pull.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    RowComponent,
    SectionComponent,
    ColorDirective,
    BgColorDirective,
    ShadeDirective,
    ColDirective,
    OffsetDirective,
    PushDirective,
    PullDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
