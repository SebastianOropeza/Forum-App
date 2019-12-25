import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from './data/posts.service';
import { Post } from './models/post';
import { skip, take } from 'rxjs/operators';
import { CommentsService } from './data/comments.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
    posts: Post[] = [];

    constructor(private postsService: PostsService, private commentsService: CommentsService, private router: Router) { }

    ngOnInit() {
        this.postsService.posts$.subscribe(posts => {
            this.posts = posts;
        });

        this.postsService.getPosts();
    }

    postDetail(post: Post) {
        this.router.navigate(['/posts/detail']);
        this.postsService.setSelected(post);
        this.commentsService.getComments(post.id);
    }
}
