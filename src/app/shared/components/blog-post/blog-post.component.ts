import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../../models/blog-post.model';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  constructor() { }

  @Input() blogPost: BlogPost;

  ngOnInit() {
  }

}
