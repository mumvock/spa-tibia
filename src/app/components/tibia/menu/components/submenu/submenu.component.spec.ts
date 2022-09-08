import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TibiaSubmenuComponent } from './submenu.component';

describe('TibiaSubmenuComponent', () => {
    let component: TibiaSubmenuComponent;
    let fixture: ComponentFixture<TibiaSubmenuComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TibiaSubmenuComponent],
        });
        fixture = TestBed.createComponent(TibiaSubmenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
