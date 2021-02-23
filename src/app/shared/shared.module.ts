import { NgModule } from "@angular/core";
import { BlogPostComponent } from "./blog-post/blog-post.component";
import { CommentFormComponent } from "./comment-form/comment-form.component";
import { CommentsComponent } from "./comments/comments.component";
import { PaginatorComponent } from "./paginator/paginator.component";
import { PostContentComponent } from "./post-content/post-content.component";

const sharedComponents = [
    BlogPostComponent,
    PaginatorComponent,
    PostContentComponent,
    CommentFormComponent,
    CommentsComponent
];

@NgModule({
    declarations: [...sharedComponents],
    imports: [],
    exports: [...sharedComponents]
})
export class SharedModule { }