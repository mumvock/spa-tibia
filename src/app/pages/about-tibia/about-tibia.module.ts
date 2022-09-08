import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about-tibia-routing.module';
import { AboutComponent } from './about-tibia.component';

@NgModule({
    declarations: [AboutComponent],
    imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
