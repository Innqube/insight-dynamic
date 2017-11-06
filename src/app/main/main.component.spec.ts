import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainComponent} from './main.component';
import {HeaderComponent} from '../header/header.component';
import {WelcomeComponent} from '../welcome/welcome.component';
import {MotivationComponent} from '../motivation/motivation.component';
import {ProjectsComponent} from '../projects/projects.component';
import {AboutUsComponent} from '../about-us/about-us.component';
import {MissionVissionValuesComponent} from '../mission-vission-values/mission-vission-values.component';
import {PartnersComponent} from '../partners/partners.component';
import {ContactComponent} from '../contact/contact.component';
import {FooterComponent} from '../footer/footer.component';
import {TranslateModule} from '@ngx-translate/core';
import {BsDropdownModule, CarouselModule, CollapseModule} from 'ngx-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {ScrollSpyAffixModule, ScrollSpyModule} from 'ngx-scrollspy';

describe('MainComponent', () => {
    let component: MainComponent;
    let fixture: ComponentFixture<MainComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MainComponent,
                HeaderComponent,
                WelcomeComponent,
                MotivationComponent,
                ProjectsComponent,
                AboutUsComponent,
                MissionVissionValuesComponent,
                PartnersComponent,
                ContactComponent,
                FooterComponent
            ],
            imports: [
                TranslateModule.forRoot(),
                ScrollSpyModule.forRoot(),
                ScrollSpyAffixModule,
                CollapseModule,
                Ng2PageScrollModule,
                BsDropdownModule.forRoot(),
                ReactiveFormsModule,
                CarouselModule.forRoot()
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
