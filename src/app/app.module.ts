import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { RowComponent } from './components/row/row.component';
import { SectionComponent } from './components/section/section.component';
import { ColorDirective } from './directives/color/color.directive';
import { BgColorDirective } from './directives/color/bg-color.directive';
import { ShadeDirective } from './directives/shade.directive';
import { ColDirective } from './directives/grid/col.directive';
import { OffsetDirective } from './directives/grid/offset.directive';
import { PushDirective } from './directives/grid/push.directive';
import { PullDirective } from './directives/grid/pull.directive';
import { DividerComponent } from './components/divider/divider.component';
import { AlignDirective } from './directives/grid/align.directive';
import { ValignDirective } from './directives/grid/valign.directive';
import { FloatDirective } from './directives/grid/float.directive';
import { HideDirective } from './directives/hide.directive';
import { ShowDirective } from './directives/show.directive';
import { TruncateDirective } from './directives/truncate.directive';
import { HoverDirective } from './directives/hover.directive';
import { BrowserDefaultDirective } from './directives/browser-default.directive';
import { ImgResponsiveDirective } from './directives/img/img-responsive.directive';
import { ImgCirclularDirective } from './directives/img/img-circlular.directive';
import { VideoContainerComponent } from './components/video-container/video-container.component';
import { ResponsiveVideoDirective } from './directives/responsive-video.directive';
import { PulseDirective } from './directives/grid/pulse.directive';
import { ShadowDirective } from './directives/shadow.directive';
import { ColComponent } from './components/col/col.component';
import { StripedDirective } from './directives/table/striped.directive';
import { HighlightDirective } from './directives/table/highlight.directive';
import { CenteredDirective } from './directives/table/centered.directive';
import { ResponsiveTableDirective } from './directives/table/responsive-table.directive';
import { FlowTextDirective } from './directives/flow-text.directive';
import { BagdeComponent } from './components/bagde/bagde.component';
import { ButtonDirective } from './directives/button/button.directive';
import { WavesDirective } from './directives/button/waves.directive';
import { FloatingDirective } from './directives/button/floating.directive';
import { FlatDirective } from './directives/button/flat.directive';
import { LargeDirective } from './directives/button/large.directive';
import { SmallDirective } from './directives/button/small.directive';
import { DisabledDirective } from './directives/button/disabled.directive';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { NavWrapperComponent } from './components/nav/nav-wrapper/nav-wrapper.component';
import { PageComponent } from './components/page/page.component';

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
    ButtonDirective,
    WavesDirective,
    FloatingDirective,
    FlatDirective,
    LargeDirective,
    SmallDirective,
    DisabledDirective,
    BreadcrumbComponent,
    NavWrapperComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
