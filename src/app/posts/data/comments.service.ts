import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Comment } from '../models/comment';
import { comments } from './comments-in-memory';

const API_URL = environment.apiUrl;
const COMMENTS = comments;

@Injectable({
    providedIn: 'root'
})
export class CommentsService {

    private _comments: BehaviorSubject<Comment[]> = new BehaviorSubject<Comment[]>([]);
    comments$ = this._comments.asObservable();

    constructor(private http: HttpClient) { }

    getComments(postId: number) {
        // this.http.get<Comment[]>(`${API_URL}/comments`).subscribe(data => {
        //     const postComments = data.filter(c => c.postId === postId);
        //     this._comments.next(postComments);
        // });
        this._comments.next(COMMENTS.filter(c => c.postId === postId));
    }
}
