import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TibiaChainBoxModule } from '../tibia/chain-box/chain-box.module';
import { TibiaMenuModule } from '../tibia/menu/menu.module';
import { TibiaIconModule } from '../tibia/icon/icon.module';

import { NavComponent } from './nav.component';

@NgModule({
    declarations: [NavComponent],
    exports: [NavComponent],
    imports: [
        CommonModule,
        RouterModule,
        TibiaChainBoxModule,
        TibiaMenuModule,
        TibiaIconModule,
    ],
})
export class NavModule {}
