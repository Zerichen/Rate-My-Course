import { ICourse } from './course.interface';
import { IComment } from '../comment.interface';

export class Course implements ICourse {
    id: string;
    name: string;
    description: string;
    credit: string;
    time: string;
    location: string;
    professor: string;
    prerequisite: string;
    review: IComment[];

    constructor(id = '', name = '', description = '', credit = '', time = '', location = '',
                professor = '', prerequisite = '', review: IComment[] = []) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.credit = credit;
            this.time = time;
            this.location = location;
            this.professor = professor;
            this.prerequisite = prerequisite;
            this.review = review;
    }
}
