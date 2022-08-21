import { AfterContentInit, Component, ElementRef } from '@angular/core';

@Component({
    selector: 'tibia-menu-item',
    template: `
        <li (click)="toggleSubmenu()">
            <ng-content></ng-content>
        </li>
    `,
    styleUrls: ['./menu-item.component.scss'],
})
export class TibiaMenuItemComponent implements AfterContentInit {
    private _submenuElement: HTMLElement | undefined;

    /**
     * @param _elementRef A wrapper around a native element inside of a View.
     */
    constructor(private readonly _elementRef: ElementRef<HTMLElement>) {}

    /** Hook após início do conteúdo deste componente. */
    public ngAfterContentInit(): void {
        this._hideSubmenu();
    }

    /**
     * Caso exista um submenu para este menu-item,
     * define altura do submenu, o esconde e instancia `_submenuElement`.
     */
    private _hideSubmenu(): void {
        const sibling: Element | null | undefined =
            this._elementRef.nativeElement.nextElementSibling;

        const submenuElement: HTMLElement | null =
            sibling && sibling.tagName === 'TIBIA-SUBMENU'
                ? (sibling as HTMLElement)
                : null;

        if (submenuElement) {
            this._submenuElement = submenuElement;
            submenuElement.style.height = submenuElement.clientHeight + 'px';
            submenuElement.classList.add('closed');
        }
    }

    /**
     * Caso exista um submenu para este menu-item,
     * alterna visibilidade do mesmo.
     */
    public toggleSubmenu(): void {
        if (this._submenuElement) {
            this._submenuElement.classList.toggle('closed');
        }
    }
}
