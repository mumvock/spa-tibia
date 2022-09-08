import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const titleFactory = (pageName: string) =>
    pageName.toString().trim() + ' - Tibia';

export const routes: Routes = [
    {
        path: 'news',
        title: titleFactory('News'),
        loadChildren: () =>
            import('./pages/news/news.module').then((m) => m.NewsModule),
    },
    {
        path: 'about-tibia',
        title: titleFactory('About'),
        loadChildren: () =>
            import('./pages/about-tibia/about-tibia.module').then((m) => m.AboutModule),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'news',
    },
    {
        path: 'not-found',
        title: titleFactory('Not found'),
        loadChildren: () =>
            import('./pages/not-found/not-found.module').then(
                (m) => m.NotFoundModule
            ),
    },
    {
        path: '**',
        redirectTo: 'not-found',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            onSameUrlNavigation: 'reload',
            scrollPositionRestoration: 'top',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
