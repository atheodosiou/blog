import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostComponent } from './shared/blog-post/blog-post.component';
import { CategoryWidgetComponent } from './shared/category-widget/category-widget.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { PaginatorComponent } from './shared/paginator/paginator.component';
import { SearchWidgetComponent } from './shared/search-widget/search-widget.component';
import { SideWidgetComponent } from './shared/side-widget/side-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BlogPostComponent,
    PaginatorComponent,
    SearchWidgetComponent,
    CategoryWidgetComponent,
    SideWidgetComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
