import { Component } from '@angular/core';

@Component({
    selector: 'tibia-menu',
    template: `
        <ul>
            <ng-content></ng-content>
        </ul>
    `,
    styleUrls: ['./menu.component.scss'],
})
export class TibiaMenuComponent {}
