import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about-tibia.component';

const routes: Routes = [
    {
        path: 'what-is-tibia',
        component: AboutComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'what-is-tibia',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AboutRoutingModule {}
