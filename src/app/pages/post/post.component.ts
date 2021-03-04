import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from 'src/app/shared/models/blog-post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public post: BlogPost;
  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.data.subscribe(data => {
      this.post = data.post;
      this.post.imageUrl="https://picsum.photos/900/300";
    });
  }

}
