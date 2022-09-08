import { Component } from '@angular/core';

@Component({
    selector: 'ul[tibiaMenu]',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./menu.component.scss']
})
export class TibiaMenuComponent {}
