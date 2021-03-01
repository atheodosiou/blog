import { BlogPost } from "./blog-post.model";

export class Post {
    limit: number;
    offset: number;
    total: number;
    posts: BlogPost[];
}