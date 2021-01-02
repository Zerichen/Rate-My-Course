import { Component, Input } from '@angular/core';
import { IUser } from '../auth/user.interface';


@Component({
    selector: 'app-profile-detail',
    template: `
    <h2>{{ user.username }}</h2>
    <ul>
        <li *ngFor="let commentData of user.comments">
            <app-comment [comment]="commentData"></app-comment>
        </li>
    </ul>
    `,
    styles: ['']
})

export class ProfileDetailComponent {
    private _user: IUser;

    @Input()
    set user(user: IUser) {
        this._user = user;
    }

    get user() {
        return this._user;
    }

    constructor() {}

}
