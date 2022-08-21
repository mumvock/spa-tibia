import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TibiaMenuComponent } from './menu.component';
import { TibiaMenuItemComponent } from './components/menu-item/menu-item.component';
import { TibiaSubmenuComponent } from './components/submenu/submenu.component';
import { TibiaSubmenuItemComponent } from './components/submenu-item/submenu-item.component';

@NgModule({
    declarations: [
        TibiaMenuComponent,
        TibiaMenuItemComponent,
        TibiaSubmenuComponent,
        TibiaSubmenuItemComponent,
    ],
    exports: [
        TibiaMenuComponent,
        TibiaMenuItemComponent,
        TibiaSubmenuComponent,
        TibiaSubmenuItemComponent,
    ],
    imports: [CommonModule],
})
export class TibiaMenuModule {}
