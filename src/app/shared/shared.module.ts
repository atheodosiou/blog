import { DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BlogPostComponent } from "./components/blog-post/blog-post.component";
import { CommentFormComponent } from "./components/comment-form/comment-form.component";
import { CommentsComponent } from "./components/comments/comments.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { PostContentComponent } from "./components/post-content/post-content.component";

const sharedComponents = [
    BlogPostComponent,
    PaginatorComponent,
    PostContentComponent,
    CommentFormComponent,
    CommentsComponent
];

@NgModule({
    declarations: [...sharedComponents],
    imports: [RouterModule],
    exports: [...sharedComponents],
    providers: [DatePipe]
})
export class SharedModule { }