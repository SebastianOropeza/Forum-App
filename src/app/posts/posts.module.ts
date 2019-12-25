import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: PostsComponent },
      { path: 'detail', component: PostComponent }
    ]
  }
];

@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    PostsListComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PostsModule { }
