
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BlogPost } from '../../models/blog-post.model';
import { SdkService } from '../sdk.service';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class PostResolver implements Resolve<BlogPost>{
    constructor(private sdk: SdkService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.sdk.getArticle(route.params.id).pipe(
            catchError((error) => {
                return empty();
            })
        );
    }
}
