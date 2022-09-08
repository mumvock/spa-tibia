import { Component, ContentChild, TemplateRef } from '@angular/core';
import { TibiaFrameHeaderDirective } from './directives/frame-header/frame-header.directive';

@Component({
    selector: 'tibia-frame, [tibiaFrame]',
    template: `
        <header tibiaBox *ngIf="tibiaFrameHeader">
            <ng-container *ngTemplateOutlet="tibiaFrameHeader"></ng-container>
        </header>

        <div [ngClass]="{ 'without-header': !tibiaFrameHeader }">
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./frame.component.scss'],
})
export class TibiaFrameComponent {
    @ContentChild(TibiaFrameHeaderDirective, { read: TemplateRef })
    public tibiaFrameHeader!: TemplateRef<HTMLElement>;
}
