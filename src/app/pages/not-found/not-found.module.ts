import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { TibiaWrapperModule } from './../../components/tibia/wrapper/wrapper.module';
import { TibiaHeaderModule } from './../../components/tibia/header/header.module';
import { TibiaContainerModule } from './../../components/tibia/container/container.module';

import { NotFoundComponent } from './not-found.component';

@NgModule({
    declarations: [NotFoundComponent],
    imports: [
        CommonModule,
        NotFoundRoutingModule,
        TibiaWrapperModule,
        TibiaHeaderModule,
        TibiaContainerModule,
    ],
})
export class NotFoundModule {}
