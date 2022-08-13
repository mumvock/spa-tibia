import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'news',
        loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule),
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'news',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
