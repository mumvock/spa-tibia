import { Component } from '@angular/core';

import { environment } from './../../../environments/environment';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
    public logo: { alt: string; source: string };

    constructor() {
        const { name, logoSource } = environment.identity;

        this.logo = {
            alt: name,
            source: logoSource,
        };
    }
}
