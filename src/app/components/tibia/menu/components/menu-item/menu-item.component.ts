import { Component } from '@angular/core';

@Component({
    selector: 'li[tibiaMenuItem]',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./menu-item.component.scss'],
})
export class TibiaMenuItemComponent {}
