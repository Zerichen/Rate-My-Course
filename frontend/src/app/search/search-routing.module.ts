import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SearchPresentComponent } from './search-present.component';

const searchRoutes: Routes = [
    {path: 'search', component: SearchPresentComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(searchRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class SearchRoutingModule {}

