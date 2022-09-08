import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TibiaBoxModule } from '../box/box.module';

import { TibiaFrameComponent } from './frame.component';
import { TibiaFrameHeaderDirective } from './directives/frame-header/frame-header.directive';

@NgModule({
    declarations: [TibiaFrameComponent, TibiaFrameHeaderDirective],
    exports: [TibiaFrameComponent, TibiaFrameHeaderDirective],
    imports: [CommonModule, TibiaBoxModule],
})
export class TibiaFrameModule {}
