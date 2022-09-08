import {
    AfterContentInit,
    Component,
    ElementRef,
    Optional,
    Renderer2,
} from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { first, Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'ul[tibiaSubmenu]',
    template: `<ng-content></ng-content>`,
    styleUrls: ['./submenu.component.scss'],
    providers: [RouterModule],
})
export class TibiaSubmenuComponent implements AfterContentInit {
    /**
     * Propriedade estática que comunica outros `TibiaSubmenuComponent`
     * se alguma de suas rotas está ativa, desta forma eles podem parar de
     * escutar se alguma de suas rotas estão ativas.
     */
    private static _SIBLING_ACTIVE$ = new Subject<void>();

    /**
     * @param _elementRef A wrapper around a native element inside of a View.
     * @param _renderer Extend this base class to implement custom rendering.
     */
    constructor(
        private readonly _elementRef: ElementRef<HTMLUListElement>,
        private readonly _renderer: Renderer2,
        @Optional() private readonly _routerLinkActive: RouterLinkActive | null
    ) {}

    /** Hook após início do conteúdo deste componente. */
    public ngAfterContentInit(): void {
        this._startToggleable();
    }

    /**
     * Caso o `TibiaSubmenuComponent` (submenu) tenha sido configurado corretamente em
     * par com seu `TibiaMenuItemComponent`, torna sua visibilidade alternável ao clicar
     * em seu `TibiaMenuItemComponent` (item de menu) correspondente.
     *
     * Além disto "fecha" todos os submenus exceto o que possui rota ativa.
     */
    private _startToggleable(): void {
        const submenu = this._elementRef.nativeElement;
        const prevSibling: Element | HTMLLIElement | null =
            this._elementRef.nativeElement.previousElementSibling;

        // Tenta identificar e capturar item de menu
        const menuItem: HTMLLIElement | null =
            prevSibling && prevSibling.tagName === 'LI'
                ? (prevSibling as HTMLLIElement)
                : null;

        // Caso não tenha sido configurado corretamente, encerra o processo
        if (!menuItem) {
            return;
        }

        // Insere no item de menu classe 'toggleable' que exibe mini ícone "plus e minus"
        this._renderer.addClass(menuItem, 'toggleable');

        // Torna a visibilidade do sumenu alternável ao clicar em seu item de menu correspondente
        this._renderer.listen(menuItem, 'click', () =>
            this._toggleSubmenu(menuItem)
        );

        // Define altura do submenu
        this._renderer.setStyle(submenu, 'height', submenu.clientHeight + 'px');

        // Fecha submenu
        this._renderer.addClass(submenu, 'closed');

        // Caso alguma rota deste submenu esteja ativa, mantém o submenu aberto ao carregar a página
        if (this._routerLinkActive) {
            this._routerLinkActive.isActiveChange
                .pipe(
                    first(),
                    takeUntil(TibiaSubmenuComponent._SIBLING_ACTIVE$)
                )
                .subscribe((active) => {
                    if (active && !menuItem.classList.contains('opened')) {
                        TibiaSubmenuComponent._SIBLING_ACTIVE$.next();
                        TibiaSubmenuComponent._SIBLING_ACTIVE$.complete();
                        this._toggleSubmenu(menuItem);
                    }
                });
        }
    }

    /** Alterna visibilidade do submenu. */
    private _toggleSubmenu(menuItem: HTMLLIElement): void {
        this._elementRef.nativeElement.classList.toggle('closed');
        menuItem.classList.toggle('opened');
    }
}
