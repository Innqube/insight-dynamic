import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PartnersComponent} from './partners.component';
import {TranslateModule} from '@ngx-translate/core';

describe('PartnersComponent', () => {
    let component: PartnersComponent;
    let fixture: ComponentFixture<PartnersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PartnersComponent],
            imports: [
                TranslateModule.forRoot()
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PartnersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
