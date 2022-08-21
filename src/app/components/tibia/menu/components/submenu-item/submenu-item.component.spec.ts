import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TibiaSubmenuItemComponent } from './submenu-item.component';

describe('TibiaSubmenuItemComponent', () => {
    let component: TibiaSubmenuItemComponent;
    let fixture: ComponentFixture<TibiaSubmenuItemComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TibiaSubmenuItemComponent],
        });
        fixture = TestBed.createComponent(TibiaSubmenuItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
