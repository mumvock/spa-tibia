import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TibiaShadowContainerComponent } from './shadow-container.component';

@NgModule({
    declarations: [TibiaShadowContainerComponent],
    exports: [TibiaShadowContainerComponent],
    imports: [CommonModule],
})
export class TibiaShadowContainerModule {}
