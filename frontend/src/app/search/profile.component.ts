import { Component, OnInit, Output, Input } from '@angular/core';
import { UserService } from '../auth/user.service';
import { IUser } from '../auth/user.interface';



@Component({
    selector: 'app-profile',
    template: `
    <div clickable>Hi, {{ username }}</div>
    `,
    styles: ['']

})

export class ProfileComponent {
    @Input() username: string;

    constructor() {}

}
