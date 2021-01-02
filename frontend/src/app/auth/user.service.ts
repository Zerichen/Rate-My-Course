import { Injectable } from '@angular/core';
import { User } from './user';
import { IUser } from './user.interface';
import { IComment } from '../comment.interface';
import { ICourse } from '../search/course.interface';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    user = new User();
    logged = false;

    constructor() {}

    updateUser(username: string, password: string, comments: IComment[], shoppingCart: ICourse[]) {
        this.user.username = username;
        this.user.password = password;
        this.user.comments = comments;
        this.user.shoppingCart = shoppingCart;
    }

    getUserInfo(): IUser {
        return this.user;
    }

    markAsLoggedIn() {
        this.logged = true;
    }

    getUserStatus(): boolean {
        return this.logged;
    }

    updateUserComments(comment: IComment) {
        this.user.comments.push(comment);
    }

}
