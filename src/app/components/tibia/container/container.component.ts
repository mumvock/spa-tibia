import { Component } from '@angular/core';

@Component({
    selector: 'tibia-container, [tibiaContainer]',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./container.component.scss'],
})
export class TibiaContainerComponent {}
