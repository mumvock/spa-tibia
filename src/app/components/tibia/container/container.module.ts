import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TibiaContainerComponent } from './container.component';

@NgModule({
    declarations: [TibiaContainerComponent],
    exports: [TibiaContainerComponent],
    imports: [CommonModule],
})
export class TibiaContainerModule {}
