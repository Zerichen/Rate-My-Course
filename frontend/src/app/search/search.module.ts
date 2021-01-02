import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent} from './courses-list.component';
import { SearchPresentComponent } from './search-present.component';
import { SearchComponent } from './search.component';
import { CourseDetailComponent } from './course-detail.component';
import { SearchRoutingModule } from './search-routing.module';
import { CommentModule } from './comment.module';
import { RegisterLoginModule } from '../auth/register-login.module';

@NgModule({
    imports: [
        CommonModule,
        SearchRoutingModule,
        CommentModule,
        RegisterLoginModule
    ],
    declarations: [
        CourseListComponent,
        SearchComponent,
        SearchPresentComponent,
        CourseDetailComponent,
    ]
})

export class SearchModule {}
