import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TibiaMenuItemComponent } from './menu-item.component';

describe('TibiaMenuItemComponent', () => {
    let component: TibiaMenuItemComponent;
    let fixture: ComponentFixture<TibiaMenuItemComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TibiaMenuItemComponent],
        });
        fixture = TestBed.createComponent(TibiaMenuItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
