import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {ScrollSpyAffixModule, ScrollSpyModule} from 'ngx-scrollspy';
import {CollapseModule} from 'ngx-bootstrap';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {TranslateModule} from '@ngx-translate/core';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [
                ScrollSpyModule.forRoot(),
                ScrollSpyAffixModule,
                CollapseModule.forRoot(),
                Ng2PageScrollModule,
                TranslateModule.forRoot()
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
