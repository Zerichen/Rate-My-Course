import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { RegisterLoginRoutingModule } from './register-login-routing.module';
import { ProfileComponent } from '../search/profile.component';
import { ProfilePresentComponent } from '../search/profile-present.component';
import { ProfileDetailComponent } from '../search/profile-detail.component';
import { CommentModule } from '../search/comment.module';
import { CommentComponent } from '../search/comment.component';

@NgModule({
    imports: [
        CommonModule,
        RegisterLoginRoutingModule,
        CommentModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        ProfilePresentComponent,
        ProfileDetailComponent,
    ],
    exports: [
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        ProfilePresentComponent,
        ProfileDetailComponent,
        CommentComponent
    ]
})

export class RegisterLoginModule {}
