import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsComponent } from './news.component';

const routes: Routes = [
    {
        path: 'archive',
        loadChildren: () =>
            import('./pages/news-archive.module').then((m) => m.NewsArchiveModule),
    },
    {
        path: 'latest',
        component: NewsComponent,
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'latest',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NewsRoutingModule {}
