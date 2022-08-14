import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TibiaWrapperComponent } from './wrapper.component';

@NgModule({
    declarations: [TibiaWrapperComponent],
    exports: [TibiaWrapperComponent],
    imports: [CommonModule],
})
export class TibiaWrapperModule {}
