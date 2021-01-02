import { Injectable } from '@angular/core';
import { CRUD } from '../CRUD';
import { IComment } from '../comment.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class SearchCommentService extends CRUD {
    fetchUrl = '/comment';

    constructor(http: HttpClient) {
        super(http);
    }

    addComment(comment: IComment): Observable<IComment> {
        return this.create<IComment>(this.fetchUrl, comment);
    }

}
