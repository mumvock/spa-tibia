import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TibiaBoxComponent } from './box.component';

@NgModule({
    declarations: [TibiaBoxComponent],
    exports: [TibiaBoxComponent],
    imports: [CommonModule],
})
export class TibiaBoxModule {}
