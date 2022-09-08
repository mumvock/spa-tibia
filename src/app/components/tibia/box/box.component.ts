import { Component } from '@angular/core';

@Component({
    selector: 'tibia-box, [tibiaBox]',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./box.component.scss'],
})
export class TibiaBoxComponent {}
