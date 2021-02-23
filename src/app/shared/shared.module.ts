import { NgModule } from "@angular/core";
import { BlogPostComponent } from "./blog-post/blog-post.component";
import { CategoryWidgetComponent } from "./category-widget/category-widget.component";
import { PaginatorComponent } from "./paginator/paginator.component";
import { SearchWidgetComponent } from "./search-widget/search-widget.component";
import { SideWidgetComponent } from "./side-widget/side-widget.component";

const sharedComponents = [
    BlogPostComponent,
    PaginatorComponent,
    SearchWidgetComponent,
    CategoryWidgetComponent,
    SideWidgetComponent,
];

@NgModule({
    declarations: [...sharedComponents],
    imports: [],
    exports: [...sharedComponents]
})
export class SharedModule { }