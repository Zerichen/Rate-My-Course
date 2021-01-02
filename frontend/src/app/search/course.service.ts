import { Injectable } from '@angular/core';
import { ICourse } from './course.interface';
import { IComment } from '../comment.interface';


@Injectable({
    providedIn: 'root'
})

export class CourseService {

    courseList: ICourse[];
    constructor() {}

    updateSearchedCourse(result: ICourse[]) {
        this.courseList = result;
    }

    getSearchedCourse() {
        return this.courseList;
    }

    updateCourseComment(comment: IComment) {
        for (const c of this.courseList) {
            if (c.id === comment.courseId) {
                c.review.push(comment);
            }
        }
    }
}
