import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from './course.interface';
import { IComment } from '../comment.interface';

@Component({
    selector: 'app-course-list',
    template: `
    <p>{{ message }}</p>
    <ul *ngIf="courseList">
        <li *ngFor="let courseData of courseList">
            <app-course-detail (comment)="updateCommnet($event); sendComment();" [course]="courseData">
            </app-course-detail>
        </li>
    </ul>
    `,
    styles: [``]
})

export class CourseListComponent {
    private _courseList: ICourse[] | [];
    message = '';
    commentToAdd: IComment;
    @Output() postComment = new EventEmitter<IComment>();

    @Input()
    set courseList(courseList: ICourse[] | []) {
        this._courseList = courseList;
        if (this._courseList !== undefined) {
            if (this._courseList.length === 0) {
                this.message = 'No result found';
            }
        }
    }

    get courseList(): ICourse[] | [] {
        return this._courseList;
    }

    updateCommnet(comment: IComment) {
        console.log(comment);
        this.commentToAdd = comment;
    }

    getComment() {
        return this.commentToAdd;
    }

    sendComment() {
        this.postComment.emit(this.getComment());
    }

    constructor() { }
}
