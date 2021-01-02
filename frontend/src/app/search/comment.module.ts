import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../search/comment.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CommentComponent
    ],
    exports: [
        CommentComponent,
        CommonModule
    ]
})

export class CommentModule {}
