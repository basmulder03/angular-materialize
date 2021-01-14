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
import { DividerComponent } from './components/divider/divider.component';
import { AlignDirective } from './directives/align.directive';
import { ValignDirective } from './directives/valign.directive';
import { FloatDirective } from './directives/float.directive';
import { HideDirective } from './directives/hide.directive';
import { ShowDirective } from './directives/show.directive';
import { TruncateDirective } from './directives/truncate.directive';
import { HoverDirective } from './directives/hover.directive';
import { BrowserDefaultDirective } from './directives/browser-default.directive';
import { ImgResponsiveDirective } from './directives/img-responsive.directive';
import { ImgCirclularDirective } from './directives/img-circlular.directive';
import { VideoContainerComponent } from './components/video-container/video-container.component';
import { ResponsiveVideoDirective } from './directives/responsive-video.directive';
import { PulseDirective } from './directives/pulse.directive';
import { ShadowDirective } from './directives/shadow.directive';
import { ColComponent } from './components/col/col.component';
import { StripedDirective } from './directives/striped.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { CenteredDirective } from './directives/centered.directive';
import { ResponsiveTableDirective } from './directives/responsive-table.directive';
import { FlowTextDirective } from './directives/flow-text.directive';
import { BagdeComponent } from './components/bagde/bagde.component';

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
    DividerComponent,
    AlignDirective,
    ValignDirective,
    FloatDirective,
    HideDirective,
    ShowDirective,
    TruncateDirective,
    HoverDirective,
    BrowserDefaultDirective,
    ImgResponsiveDirective,
    ImgCirclularDirective,
    VideoContainerComponent,
    ResponsiveVideoDirective,
    PulseDirective,
    ShadowDirective,
    ColComponent,
    StripedDirective,
    HighlightDirective,
    CenteredDirective,
    ResponsiveTableDirective,
    FlowTextDirective,
    BagdeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
