import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AboutUsComponent} from './about-us.component';
import {TranslateModule} from '@ngx-translate/core';

describe('AboutUsComponent', () => {
    let component: AboutUsComponent;
    let fixture: ComponentFixture<AboutUsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AboutUsComponent],
            imports: [
                TranslateModule.forRoot()
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AboutUsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
