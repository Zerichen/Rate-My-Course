import { Component, Input } from '@angular/core';
import { IComment } from '../comment.interface';


@Component({
    selector: 'app-comment',
    template: `
    <div>
        <p id="comment">{{ comment.comment }}</p>
        <span>{{ comment.commenter }} | {{ comment.date }}</span>
    </div>
    `,
    styles: ['']
})

export class CommentComponent {
    private _comment: IComment;

    @Input()
    set comment(comment: IComment) {
        this._comment = comment;
    }

    get comment(): IComment {
        return this._comment;
    }

    constructor() {}
}
