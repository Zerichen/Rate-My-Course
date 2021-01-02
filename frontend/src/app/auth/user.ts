import { IUser } from './user.interface';
import { IComment } from '../comment.interface';
import { ICourse } from '../search/course.interface';

export class User implements IUser {
    username: string;
    password: string;
    comments: IComment[];
    shoppingCart: ICourse[];

    constructor(username = '', password = '', comments: IComment[] = [], shoppingcart: ICourse[] = []) {
        this.username = username;
        this.password = password;
        this.comments = comments;
        this.shoppingCart = shoppingcart;
    }
}
