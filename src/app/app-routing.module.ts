import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostResolver } from './shared/services/resolvers/post.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  {
    path: 'post/:id', loadChildren: () => import('./pages/post/post.module').then(m => m.PostModule),
    resolve: {
      post: PostResolver
    }
  },
  { path: 'cpanel', loadChildren: () => import('./pages/cPanel/cPanel.module').then(m => m.CPanelModule) },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
