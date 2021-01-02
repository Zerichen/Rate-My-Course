import { Component, OnInit } from '@angular/core';
import { SearchCourseService } from './search-course.service';
import { CourseService } from './course.service';
import { ICourse } from './course.interface';
import { IComment } from '../comment.interface';
import { SearchCommentService } from './search-comment.service';
import { UserService } from '../auth/user.service';


@Component({
    selector: 'app-present',
    template: `
    <app-profile-present *ngIf="signIn"></app-profile-present>
    <app-search (finishTyping)="searchCourseByID($event)" (finishClicking)="updateSearchStatus($event)">
    </app-search>
    <app-course-list *ngIf="searchStatus" [courseList]="tempResult" (postComment)="updateComment($event); addComment();">
    </app-course-list>
    `,
    styles: [``]
})

export class SearchPresentComponent implements OnInit {

    tempResult: ICourse[];
    searchStatus = false;
    signIn = false;
    comment: IComment;

    constructor(private searchcourseservice: SearchCourseService, private courseservice: CourseService,
                private searchcommentservice: SearchCommentService, private userservice: UserService) {}

    searchCourseByID(id: string) {
        this.searchcourseservice.searchCourse(id).subscribe(
            (courseResult) => {
                this.courseservice.updateSearchedCourse(courseResult),
                this.getSearchResult();
            },
            (error) => { console.log(error); }
        );
    }

    addComment() {
        console.log('add comment');
        this.searchcommentservice.addComment(this.getComment()).subscribe(
            (result) => {
                this.courseservice.updateCourseComment(result);
                this.getSearchResult();
                this.userservice.updateUserComments(result);
            },
            (err) => { console.log(err); }
        );
    }


    getSearchResult() {
        this.tempResult = this.courseservice.getSearchedCourse();
    }

    updateSearchStatus(status: boolean) {
        this.searchStatus = status;
    }

    updateComment(comment: IComment) {
        this.comment = comment;
    }

    getComment(): IComment {
        return this.comment;
    }

    getUserLoggedIn() {
        this.signIn = this.userservice.getUserStatus();
    }

    ngOnInit() {
        this.getUserLoggedIn();
    }

}


