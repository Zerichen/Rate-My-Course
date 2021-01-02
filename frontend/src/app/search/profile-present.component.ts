import { Component, OnInit } from '@angular/core';
import { IUser } from '../auth/user.interface';
import { UserService } from '../auth/user.service';

@Component({
    selector: 'app-profile-present',
    template: `
    <div id="profile">
        <app-profile (click)="showDetail()" [username]="profileUser.username"></app-profile>
        <app-profile-detail *ngIf="detailRender" [user]="profileUser"></app-profile-detail>
    </div>
    `,
    styles: ['']
})

export class ProfilePresentComponent implements OnInit {

    profileUser: IUser;
    detailRender = false;
    counter = 0;
    constructor(private userservice: UserService) {}

    getUser() {
        this.profileUser = this.userservice.getUserInfo();
    }

    showDetail() {
        if (this.counter % 2 === 0) {
            this.detailRender = true;
        } else {
            this.detailRender = false;
        }
        this.counter += 1;
    }

    ngOnInit() {
        this.getUser();
    }
}
