import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './header/header.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {MotivationComponent} from './motivation/motivation.component';
import {ScrollSpyAffixModule} from 'ngx-scrollspy/dist/plugin/affix';
import {BsDropdownModule, CarouselModule, CollapseModule} from 'ngx-bootstrap';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {ScrollSpyModule} from 'ngx-scrollspy';
import {MissionVissionValuesComponent} from './mission-vission-values/mission-vission-values.component';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from './footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AboutUsComponent} from './about-us/about-us.component';
import {ProjectsComponent} from './projects/projects.component';
import {PartnersComponent} from './partners/partners.component';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        HeaderComponent,
        WelcomeComponent,
        MotivationComponent,
        MissionVissionValuesComponent,
        ContactComponent,
        FooterComponent,
        AboutUsComponent,
        ProjectsComponent,
        PartnersComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        ScrollSpyModule.forRoot(),
        ScrollSpyAffixModule,
        CollapseModule,
        Ng2PageScrollModule,
        BsDropdownModule.forRoot(),
        ReactiveFormsModule,
        CarouselModule.forRoot(),
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
