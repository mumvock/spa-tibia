import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TibiaHeadlineComponent } from './headline.component';

@NgModule({
    declarations: [TibiaHeadlineComponent],
    exports: [TibiaHeadlineComponent],
    imports: [CommonModule],
})
export class TibiaHeadlineModule {}
