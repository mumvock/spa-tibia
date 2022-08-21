import { Component } from '@angular/core';

@Component({
    selector: 'tibia-submenu-item',
    template: `
        <li>
            <ng-content></ng-content>
        </li>
    `,
    styleUrls: ['./submenu-item.component.scss'],
})
export class TibiaSubmenuItemComponent {}
