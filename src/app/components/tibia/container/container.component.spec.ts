import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TibiaContainerComponent } from './container.component';

describe('TibiaContainerComponent', () => {
    let component: TibiaContainerComponent;
    let fixture: ComponentFixture<TibiaContainerComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TibiaContainerComponent],
        });
        fixture = TestBed.createComponent(TibiaContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
