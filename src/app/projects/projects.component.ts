import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    projects = [
        {
            title: 'ACELEROCARDIOGRAMA',
            videos: [
                'https://drive.google.com/file/d/0B0Z1Sl49bJUoTllFdHRYMjVLdjg/preview?authuser=0'
            ],
            description: 'ACELEROCARDIOGRAMA_DESC'
        },
        {
            title: 'OFTALMOSCOPIO',
            videos: [
                'https://drive.google.com/file/d/0B0Z1Sl49bJUoTXZtLXRtS2ItaDA/preview?authuser=0'
            ],
            description: 'OFTALMOSCOPIO_DESC'
        }
    ];
    currentProjectIndex = 0;
    currentProject = this.projects[0];
    timerSubscription: Subscription;

    constructor(private translate: TranslateService) {
    }

    ngOnInit() {
        this.timerSubscription = Observable.timer(0, 10000).subscribe(() => this.switchToNext());
    }

    next() {
        this.timerSubscription.unsubscribe();
        this.switchToNext();
    }

    private switchToNext() {
        if (this.currentProjectIndex === this.projects.length - 1) {
            this.currentProjectIndex = 0;
        } else {
            this.currentProjectIndex++;
        }
        this.currentProject = this.projects[this.currentProjectIndex];
    }

    previous() {
        this.timerSubscription.unsubscribe();
        if (this.currentProjectIndex === 0) {
            this.currentProjectIndex = this.projects.length - 1;
        } else {
            this.currentProjectIndex--;
        }
        this.currentProject = this.projects[this.currentProjectIndex];
    }

    clickVideo() {
        this.timerSubscription.unsubscribe();
    }
}
