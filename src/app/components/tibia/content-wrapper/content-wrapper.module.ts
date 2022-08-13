import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentWrapperComponent } from './content-wrapper.component';

@NgModule({
    declarations: [ContentWrapperComponent],
    exports: [ContentWrapperComponent],
    imports: [CommonModule],
})
export class ContentWrapperModule {}
