import { Component } from '@angular/core';

@Component({
    selector: 'tibia-wrapper, [tibiaWrapper]',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./wrapper.component.scss'],
})
export class TibiaWrapperComponent {}
