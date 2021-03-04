import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/shared/models/blog-post.model';
import { SdkService } from 'src/app/shared/services/sdk.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  limit: number = 3;

  constructor(private sdk: SdkService) { }
  blogPosts: BlogPost[] = [];
  blogPostPreview: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!';

  blogPostContent: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id molestie sapien. Vivamus quis placerat odio. Integer non volutpat urna, at blandit nisi. Nam at porta magna. Nam porta turpis nec commodo semper. Integer nisi arcu, semper interdum lacus eu, pharetra ornare tellus. Suspendisse ac luctus augue, eu tempor neque. Donec commodo est ac arcu condimentum, ac dapibus nulla convallis. Sed ac odio sed eros aliquet cursus eu nec erat. Donec consequat mi eu tristique viverra. Nulla accumsan quis eros eu condimentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam pharetra tempus auctor. Duis eu lacinia eros.' +
    'In hac habitasse platea dictumst. Curabitur quis nibh mauris. Nullam ultricies ut risus quis convallis. Mauris sodales ornare hendrerit. Integer et velit ac elit maximus pretium. Mauris ac neque orci. Duis consequat erat sed risus mattis tincidunt. Maecenas in sodales urna. Donec nec enim dignissim, tincidunt augue id, malesuada turpis. Nam at massa at sem laoreet rhoncus ut laoreet massa. Cras eu tempus eros, ut sodales felis. Donec eu quam eu enim elementum placerat.' +
    'Proin in ante id mauris bibendum volutpat. Duis viverra pulvinar leo. Nullam facilisis, massa ac mollis eleifend, justo velit euismod urna, quis tempor augue quam nec odio. Donec sit amet eros turpis. Duis eget justo sodales, dignissim dui vitae, accumsan risus. Sed tempor tincidunt nisl, non facilisis eros. Maecenas id dignissim nibh. Maecenas vulputate, elit eget ultricies interdum, eros risus venenatis nulla, a rutrum velit diam sed enim.' +
    'Pellentesque sagittis turpis sit amet dapibus fermentum. Quisque turpis neque, congue vel velit eget, consequat ultricies leo. Vivamus velit ipsum, tempor ut laoreet ac, pellentesque at libero. Maecenas mi nisi, gravida sed tellus a, bibendum tempus ipsum. Ut facilisis eu sapien vitae venenatis. Nulla metus nulla, rhoncus at sem in, luctus faucibus erat. Proin pretium arcu non tristique molestie. Maecenas eros enim, placerat in congue quis, dignissim ac massa. Quisque ullamcorper placerat dignissim. Quisque lobortis nunc ut lectus congue tristique. Integer at iaculis ipsum. Ut bibendum enim sit amet odio placerat, ut venenatis mauris faucibus.' +
    'In non diam justo. Sed elementum metus vitae ligula faucibus commodo. Donec quis dignissim ligula. Quisque ultricies turpis vel elementum feugiat. Praesent ultricies molestie sem et tincidunt. Vestibulum fringilla risus et venenatis ultrices. Ut rutrum purus neque, sollicitudin scelerisque nunc dictum sit amet. Curabitur in eleifend metus. Curabitur nec leo eget sapien pretium iaculis in a massa. Curabitur luctus ut dolor at consequat. Suspendisse congue ligula non sapien congue, tristique hendrerit justo porta. Integer eget velit placerat, gravida tellus eget, vulputate magna. Duis accumsan lectus quis sem commodo tristique. Proin rhoncus libero magna, ac luctus lectus porttitor sit amet. Etiam et mauris ligula.';

  ngOnInit() {
    this.sdk.getArticles({ limit: this.limit, offset: 0 }).subscribe(res => {
      this.blogPosts = res.posts.map(x => { x.imageUrl = 'https://picsum.photos/750/300'; return x; });
    }, error => { console.error(error) });
  }
}