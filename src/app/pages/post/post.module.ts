import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: PostComponent
    }]),
    SharedModule
  ],
  declarations: [PostComponent],
  exports: [PostComponent]
})
export class PostModule { }
