import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TibiaHeadlineComponent } from './headline.component';

describe('TibiaHeadlineComponent', () => {
    let component: TibiaHeadlineComponent;
    let fixture: ComponentFixture<TibiaHeadlineComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TibiaHeadlineComponent],
        });
        fixture = TestBed.createComponent(TibiaHeadlineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
