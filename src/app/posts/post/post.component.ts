import { Component, OnInit } from '@angular/core';
import { PostsService } from '../data/posts.service';
import { Post } from '../models/post';
import { Comment } from '../models/comment';
import { CommentsService } from '../data/comments.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
    post: Post;
    comments: Comment[];

    constructor(private postsService: PostsService, private commentsService: CommentsService) { }

    ngOnInit() {
        this.postsService.selectedPost$.subscribe(data => {
            this.post = data;
        });
        this.commentsService.comments$.subscribe(data => {
            this.comments = data;
        });
    }

}
