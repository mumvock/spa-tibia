import { Component } from '@angular/core';

@Component({
    selector: 'tibia-headline, [tibiaHeadline]',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./headline.component.scss'],
})
export class TibiaHeadlineComponent {}
