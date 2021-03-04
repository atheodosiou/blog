import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BlogPost } from '../models/blog-post.model';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class SdkService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'xapikey': environment.apiKey
    });
  }

  public getArticles(paginationData: { limit: number, offset: number }): Observable<Post> {
    return this.http.post<Post>(`${environment.serverUrl}/posts/paginated`, paginationData, { headers: this.headers });
  }

  public getArticle(id: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${environment.serverUrl}/posts/${id}`, { headers: this.headers });
  }
}
