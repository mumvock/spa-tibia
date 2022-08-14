import { Component } from '@angular/core';

@Component({
    selector: 'tibia-wrapper',
    template: `
        <div>
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./wrapper.component.scss'],
})
export class TibiaWrapperComponent {}
