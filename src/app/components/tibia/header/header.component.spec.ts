import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TibiaHeaderComponent } from './header.component';

describe('TibiaHeaderComponent', () => {
    let component: TibiaHeaderComponent;
    let fixture: ComponentFixture<TibiaHeaderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TibiaHeaderComponent],
        });
        fixture = TestBed.createComponent(TibiaHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
