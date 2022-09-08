import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TibiaFrameHeaderComponent } from './frame-header.component';

describe('TibiaFrameHeaderComponent', () => {
    let component: TibiaFrameHeaderComponent;
    let fixture: ComponentFixture<TibiaFrameHeaderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TibiaFrameHeaderComponent],
        });
        fixture = TestBed.createComponent(TibiaFrameHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
