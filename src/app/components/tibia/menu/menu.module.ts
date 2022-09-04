import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TibiaMenuComponent } from './menu.component';
import { TibiaMenuItemComponent } from './components/menu-item/menu-item.component';
import { TibiaSubmenuComponent } from './components/submenu/submenu.component';

@NgModule({
    declarations: [
        TibiaMenuComponent,
        TibiaMenuItemComponent,
        TibiaSubmenuComponent,
    ],
    exports: [
        TibiaMenuComponent,
        TibiaMenuItemComponent,
        TibiaSubmenuComponent,
    ],
    imports: [CommonModule],
})
export class TibiaMenuModule {}
