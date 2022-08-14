import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TibiaIconComponent } from './icon.component';

@NgModule({
    declarations: [TibiaIconComponent],
    exports: [TibiaIconComponent],
    imports: [CommonModule],
})
export class TibiaIconModule {}
