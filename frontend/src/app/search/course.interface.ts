import { IComment } from '../comment.interface';

export interface ICourse {
    id: string;
    name: string;
    description: string;
    credit: string;
    time: string;
    location: string;
    professor: string;
    prerequisite: string;
    review: IComment[];
}
