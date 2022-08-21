import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TibiaChainBoxComponent } from './chain-box.component';

@NgModule({
    declarations: [TibiaChainBoxComponent],
    exports: [TibiaChainBoxComponent],
    imports: [CommonModule],
})
export class TibiaChainBoxModule {}
