import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './PageError.component';
import { RegisterLoginRoutingModule } from './auth/register-login-routing.module';
import { SearchModule } from './search/search.module';


const appRoutes: Routes = [
    {path: '', loadChildren: './auth/register-login.module#RegisterLoginModule'},
    {path: '', loadChildren: './search/search.module#SearchModule'},
    {path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RegisterLoginRoutingModule,
        SearchModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule,
    ]
})

export class AppRoutingModule {}
