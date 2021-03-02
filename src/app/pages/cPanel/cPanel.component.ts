import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/shared/models/blog-post.model';
import { Post } from 'src/app/shared/models/post.model';
import { SdkService } from 'src/app/shared/services/sdk.service';

@Component({
  selector: 'app-cPanel',
  templateUrl: './cPanel.component.html',
  styleUrls: ['./cPanel.component.scss']
})
export class CPanelComponent implements OnInit {

  constructor(private sdk: SdkService) { }
  htmlContent: string;
  result: Post;

  ngOnInit() {
    this.sdk.getArticles({ limit: 10, offset: 0 }).subscribe(res => {
      this.result = res;
    }, error => { console.log(error) });
  }

}
