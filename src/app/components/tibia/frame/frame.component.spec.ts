import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TibiaFrameComponent } from './frame.component';

describe('TibiaFrameComponent', () => {
    let component: TibiaFrameComponent;
    let fixture: ComponentFixture<TibiaFrameComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TibiaFrameComponent],
        });
        fixture = TestBed.createComponent(TibiaFrameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
