import { Component } from '@angular/core';

@Component({
    selector: 'tibia-submenu',
    template: `
        <ul>
            <ng-content></ng-content>
        </ul>
    `,
    styleUrls: ['./submenu.component.scss'],
})
export class TibiaSubmenuComponent {}
