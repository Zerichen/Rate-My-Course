import { Component, OnInit } from '@angular/core';
import { IUser } from './user.interface';
import { User } from './user';
import { UserService } from './user.service';
import { ValidateService } from './validate.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    template: `
    <label>Username: </label>
    <input (input)="getUserName($event.target.value)" type="text" name="username" required>

    <label>Password: </label>
    <input (input)="getUserPassword($event.target.value)" type="password"
    name="password" placeholder="at least 6 characters or digits" required>

    <button (click)="register()">sign up</button>

    <p>{{ this.message }}</p>

    <button (click)="gotoLogin()">Go Back</button>
    `
})

export class RegisterComponent implements OnInit {
    message: string;
    user: IUser;

    constructor(private validateSerivce: ValidateService, private userservice: UserService, private router: Router) {}

    ngOnInit() {
        this.user = new User();
    }

    register() {
        this.validateSerivce.registrationValidate(this.user).subscribe(
            (result) => {
                if (result['error']) {
                    this.message = result['error'];
                } else {
                    this.userservice.updateUser(result['username'], result['password'], result['comments'], result['shoppingCart']);
                    this.user = this.userservice.getUserInfo();
                    this.gotoLogin();
                }
            },
            (err) => {
                console.log(err);
            }
        );
    }

    getUserName(username: string) {
        this.user.username = username;
    }

    getUserPassword(password: string) {
        this.user.password = password;
    }

    gotoLogin() {
        this.router.navigateByUrl('');
    }

}
