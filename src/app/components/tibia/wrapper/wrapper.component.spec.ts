import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TibiaWrapperComponent } from './wrapper.component';

describe('TibiaWrapperComponent', () => {
    let component: TibiaWrapperComponent;
    let fixture: ComponentFixture<TibiaWrapperComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TibiaWrapperComponent],
        });
        fixture = TestBed.createComponent(TibiaWrapperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
