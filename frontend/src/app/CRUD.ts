import { HttpClient } from '@angular/common/http';
// import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

// @Injectable({
//     providedIn: 'root'
// })

export abstract class CRUD {
    constructor(private http: HttpClient) {}

    read<T>(url: string): Observable<T> {
        return this.http.get<T>(url);
    }

    create<T>(url, obj): Observable<T> {
        return this.http.post<T>(url, obj);
    }

    // update(url) {

    // }

    // delete(url, obj) {

    // }

}
