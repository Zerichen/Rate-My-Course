import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { CRUD } from '../CRUD';
import { ICourse } from './course.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class SearchCourseService extends CRUD {
    fetchUrl = '/course';

    constructor(http: HttpClient) {
        super(http);
    }

    searchCourse(id: string): Observable<ICourse[]> {
        return this.read<ICourse[]>(`${this.fetchUrl}/${id}`);
    }

}

