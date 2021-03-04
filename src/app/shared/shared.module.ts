import { DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { BlogPostComponent } from "./components/blog-post/blog-post.component";
import { CategoryWidgetComponent } from "./components/category-widget/category-widget.component";
import { CommentFormComponent } from "./components/comment-form/comment-form.component";
import { CommentsComponent } from "./components/comments/comments.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { PostContentComponent } from "./components/post-content/post-content.component";
import { SideWidgetComponent } from "./components/side-widget/side-widget.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

const sharedComponents = [
    BlogPostComponent,
    PaginatorComponent,
    PostContentComponent,
    CommentFormComponent,
    CommentsComponent,
    AboutMeComponent,
    SideWidgetComponent,
    CategoryWidgetComponent,
    FooterComponent,
    NavBarComponent
];

@NgModule({
    declarations: [...sharedComponents],
    imports: [RouterModule],
    exports: [...sharedComponents],
    providers: [DatePipe]
})
export class SharedModule { }