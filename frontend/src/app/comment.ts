import { IComment } from './comment.interface';

export class Comment implements IComment {
    id: string;
    courseId: string;
    date: string;
    comment: string;

    constructor(id = '', courseID = '', date = '', comment = '') {
        this.id = id;
        this.courseId = courseID;
        this.date = date;
        this.comment = comment;
    }
}
