import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search',
    template: `
    <input (input)="getCourseID($event.target.value)" type="text" id="search" name="courseid" placeholder="Find your course by id">
    <button (click)="sendCourseID(); sendSearchStatus();">How is it?</button>
    <button (click)="sendEmptyID();  sendSearchStatus();">Browse all courses</button>
    `,
    styles: [``]
})

export class SearchComponent {

    @Output() finishTyping = new EventEmitter<string>();
    @Output() finishClicking = new EventEmitter<boolean>();

    courseID = '';
    searched = false;

    constructor() {}

    sendSearchStatus() {
        this.finishClicking.emit(this.searched);
    }

    getCourseID(id: string) {
        this.courseID = id;
    }

    sendCourseID() {
        this.searched = true;
        this.finishTyping.emit(this.courseID);
    }

    sendEmptyID() {
        this.searched = true;
        this.finishTyping.emit('');
    }
}

