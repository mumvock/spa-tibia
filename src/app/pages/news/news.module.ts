import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NewsRoutingModule } from './news-routing.module';
import { TibiaWrapperModule } from './../../components/tibia/wrapper/wrapper.module';
import { TibiaHeaderModule } from './../../components/tibia/header/header.module';
import { TibiaHeadlineModule } from './../../components/tibia/headline/headline.module';
import { TibiaContainerModule } from './../../components/tibia/container/container.module';
import { TibiaIconModule } from './../../components/tibia/icon/icon.module';

import { NewsComponent } from './news.component';

@NgModule({
    declarations: [NewsComponent],
    imports: [
        CommonModule,
        NewsRoutingModule,
        TibiaWrapperModule,
        TibiaHeaderModule,
        TibiaHeadlineModule,
        TibiaContainerModule,
        TibiaIconModule,
    ],
})
export class NewsModule {}
