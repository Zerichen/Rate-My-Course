import { Component, OnInit } from '@angular/core';
import { IUser } from './user.interface';
import { User } from './user';
import { UserService } from './user.service';
import { ValidateService } from './validate.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    template: `
    <button (click)="gotoRegistration()">Haven't registed before? Sign up here</button><br>

    <label>Username: </label>
    <input (input)="getUserName($event.target.value)" type="text" required><br>

    <label>Password: </label>
    <input (input)="getUserPassword($event.target.value)" type="password" required><br>

    <button (click)="login()">sign in</button>

    <p>{{ this.message }}</p>
    `
})

export class LoginComponent implements OnInit {
    message: string;
    user: IUser;

    constructor(private userservice: UserService, private validateService: ValidateService, private router: Router) {}

    ngOnInit() {
        this.user = new User();
    }

    login() {
        this.validateService.loginValidate(this.user).subscribe(
            (result) => {
                if (result['error']) {
                    this.message = result['error'];
                } else {
                    this.userservice.updateUser(result['username'], result['password'], result['comments'], result['shoppingCart']);
                    this.userservice.markAsLoggedIn();
                    this.user = this.userservice.getUserInfo();
                    this.router.navigateByUrl('/search');
                }
            },
            (err) => {
                console.log(err);
            },
        );
    }

    getUserName(username: string) {
        this.user.username = username;
    }

    getUserPassword(password: string) {
        this.user.password = password;
    }

    gotoRegistration() {
        this.router.navigateByUrl('/register');
    }

}
