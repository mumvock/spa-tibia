import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NewsArchiveRoutingModule } from './news-archive-routing.module';

import { NewsArchiveComponent } from './news-archive.component';

@NgModule({
    declarations: [NewsArchiveComponent],
    imports: [CommonModule, NewsArchiveRoutingModule],
})
export class NewsArchiveModule {}
