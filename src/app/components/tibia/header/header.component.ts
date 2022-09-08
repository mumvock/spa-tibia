import { Component } from '@angular/core';

@Component({
    selector: 'tibia-header, header[tibiaHeader]',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./header.component.scss'],
})
export class TibiaHeaderComponent {}
