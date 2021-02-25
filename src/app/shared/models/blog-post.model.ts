export class BlogPost {
    _id?: string
    title: string;
    preview: string;
    postDate: string;
    author: string;
    imageUrl: string;
    content: any;
    comments?: any;
    likes?: number;
    shares?: number
    category?: any;
    tags?: string[];
}