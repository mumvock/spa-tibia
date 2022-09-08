import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TibiaHeaderComponent } from './header.component';

@NgModule({
    declarations: [TibiaHeaderComponent],
    exports: [TibiaHeaderComponent],
    imports: [CommonModule],
})
export class TibiaHeaderModule {}
