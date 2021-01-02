import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from './course.interface';
import { IComment } from '../comment.interface';
import { UserService } from '../auth/user.service';

@Component({
    selector: 'app-course-detail',
    template: `
    <div>
        <p>ID: {{ course.id }}</p>
        <p>Name: {{ course.name }}</p>
        <p>Description: {{ course.description }}</p>
        <p>Credit: {{ course.credit }}</p>
        <p>Time: {{ course.time }}</p>
        <p>Location: {{ course.location }}</p>
        <p>Professor: {{ course.professor }}</p>
        <p>Prerequisite: {{ course.prerequisite }}</p>
        <p>{{ message }}</p>
        Comments:
        <ul>
            <li *ngFor="let review of course.review">
                <app-comment [comment]="review"></app-comment>
                
            </li>
        </ul>
        <input (input)="getComment($event.target.value)" type="text" placeholder="share your own thought">
        <button (click)="sendCommentObject()">post</button>
    </div>
    `,
    styles: ['']
})

export class CourseDetailComponent {

    monthMapping = {
        'Jan': '01',
        'Feb': '02',
        'Mar': '03',
        'Apr': '04',
        'May': '05',
        'Jun': '06',
        'Jul': '07',
        'Aug': '08',
        'Sep': '09',
        'Oct': '10',
        'Nov': '11',
        'Dec': '12',
    };

    private _course: ICourse;
    commentObj: IComment;
    commentData: string;
    message = '';
    @Output() comment = new EventEmitter<IComment>();
    @Output() courseID = new EventEmitter<string>();

    @Input()
    set course(course: ICourse) {
        this._course = course;
        console.log(this._course);
        if (this._course.review.length === 0) {
            this.message = 'No comment yet';
        } else {
            this.message = '';
        }
    }

    get course(): ICourse {
        return this._course;
    }

    constructor(private userservice: UserService) {}

    getComment(comment: string) {
        this.commentData = comment;
    }

    sendCommentObject() {
        const date = new Date();
        const commentObj = {
            'id': '',
            'courseId': this.course.id,
            'commenter': this.userservice.getUserInfo().username,
            'date': date.toString(),
            'comment': this.commentData
        };
        const reformattedComment = this.commentTimeFormatter([commentObj])[0];
        this.comment.emit(reformattedComment);
    }

    sendCourseID() {
        this.courseID.emit(this._course.id);
    }

    commentTimeFormatter(arr) {
        return arr.map((obj) => {
            const date = obj.date;
            if (date.length > 10) {
                const dateArray = date.split(' ');
                const month = dateArray[1];
                const day = dateArray[2];
                const year = dateArray[3];
                obj.date = `${year}-${this.monthMapping[month]}-${day}`;
            }
            return obj;
        });
    }
}
