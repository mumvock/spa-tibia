import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TibiaBoxComponent } from './box.component';

describe('TibiaBoxComponent', () => {
    let component: TibiaBoxComponent;
    let fixture: ComponentFixture<TibiaBoxComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TibiaBoxComponent],
        });
        fixture = TestBed.createComponent(TibiaBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
