import { IComment } from '../comment.interface';
import { ICourse } from '../search/course.interface';

export interface IUser {
    username: string;
    password: string;
    comments: IComment[];
    shoppingCart: ICourse[];
}
