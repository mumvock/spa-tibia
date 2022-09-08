import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TibiaMenuComponent } from './menu.component';

describe('TibiaMenuComponent', () => {
    let component: TibiaMenuComponent;
    let fixture: ComponentFixture<TibiaMenuComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TibiaMenuComponent],
        });
        fixture = TestBed.createComponent(TibiaMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
