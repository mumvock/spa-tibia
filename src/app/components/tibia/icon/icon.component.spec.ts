import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TibiaIconComponent } from './icon.component';

describe('TibiaIconComponent', () => {
    let component: TibiaIconComponent;
    let fixture: ComponentFixture<TibiaIconComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TibiaIconComponent],
        });
        fixture = TestBed.createComponent(TibiaIconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
