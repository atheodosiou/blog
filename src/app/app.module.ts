import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './shared/components/about-me/about-me.component';
import { CategoryWidgetComponent } from './shared/components/category-widget/category-widget.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SearchWidgetComponent } from './shared/components/search-widget/search-widget.component';
import { SideWidgetComponent } from './shared/components/side-widget/side-widget.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutMeComponent,
    SearchWidgetComponent,
    CategoryWidgetComponent,
    SideWidgetComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
