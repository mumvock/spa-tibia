import { Component, Input } from '@angular/core';

import { TibiaIconName } from './icon.interface';

interface Icon {
    name: TibiaIconName;
    source: string;
    alt: string;
}

@Component({
    selector: 'tibia-icon, [tibiaIcon]',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
})
export class TibiaIconComponent {
    @Input()
    public set iconName(name: TibiaIconName) {
        this.icon = {
            name,
            source: `assets/images/icons/icon-${name}.gif`,
            alt: `${name} icon`,
        }
    };

    public icon!: Icon;
}
