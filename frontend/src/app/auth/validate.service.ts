import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './user.interface';
import { CRUD } from '../CRUD';
import { Observable } from 'rxjs';
import { IError } from '../error.interface';

@Injectable({
    providedIn: 'root'
})

export class ValidateService extends CRUD {

    loginUrl = '/login';
    registerUrl = '/register';

    constructor(http: HttpClient) {
        super(http);
    }

    loginValidate(user: IUser): Observable<IUser | IError> {
        return this.create<IUser | IError>(this.loginUrl, user);
    }

    registrationValidate(user: IUser): Observable<IUser | IError> {
        return this.create<IUser | IError>(this.registerUrl, user);
    }
}
