import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TibiaChainBoxComponent } from './chain-box.component';

describe('TibiaChainBoxComponent', () => {
    let component: TibiaChainBoxComponent;
    let fixture: ComponentFixture<TibiaChainBoxComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TibiaChainBoxComponent],
        });
        fixture = TestBed.createComponent(TibiaChainBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
