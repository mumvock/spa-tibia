import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NewsRoutingModule } from './news-routing.module';
import { ContentWrapperModule } from './../../components/tibia/content-wrapper/content-wrapper.module';

import { NewsComponent } from './news.component';

@NgModule({
    declarations: [NewsComponent],
    imports: [CommonModule, NewsRoutingModule, ContentWrapperModule]
})
export class NewsModule {}
