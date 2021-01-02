import { RouterModule, Routes  } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

const registerLoginRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(registerLoginRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class RegisterLoginRoutingModule {}
