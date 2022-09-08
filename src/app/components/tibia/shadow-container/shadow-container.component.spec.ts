import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TibiaShadowContainerComponent } from './shadow-container.component';

describe('TibiaShadowContainerComponent', () => {
    let component: TibiaShadowContainerComponent;
    let fixture: ComponentFixture<TibiaShadowContainerComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TibiaShadowContainerComponent],
        });
        fixture = TestBed.createComponent(TibiaShadowContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
