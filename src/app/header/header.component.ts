import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    collapsed = true;

    constructor(private translate: TranslateService) {
    }

    ngOnInit() {
    }

    changeLanguage(lang: string) {
        this.translate.use(lang);
    }

}
