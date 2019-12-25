import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Post } from '../models/post';
// import { posts } from './posts-in-memory';

const API_URL = environment.apiUrl;
// const POSTS = posts;

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    private _posts: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
    posts$ = this._posts.asObservable();

    private post: Post = {
        userId: null,
        id: null,
        title: null,
        body: null
    };
    private _selectedPost: BehaviorSubject<Post> = new BehaviorSubject<Post>(this.post);
    selectedPost$ = this._selectedPost.asObservable();

    constructor(private http: HttpClient) { }

    getPosts() {
        this.http.get<Post[]>(`${API_URL}/posts`).subscribe(data => {
            this._posts.next(data);
        });
    }
    setSelected(post: Post) {
        this._selectedPost.next(post);
    }
}
