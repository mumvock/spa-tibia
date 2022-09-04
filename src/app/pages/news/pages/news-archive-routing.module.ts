import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsArchiveComponent } from './news-archive.component';

const routes: Routes = [
    {
        path: '',
        component: NewsArchiveComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NewsArchiveRoutingModule {}
