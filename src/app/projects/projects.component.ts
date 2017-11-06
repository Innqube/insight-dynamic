import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

    projects = [
        {
            title: 'ACELEROCARDIOGRAMA',
            videoId: 'xXbXTLRBu1c',
            description: 'ACELEROCARDIOGRAMA_DESC'
        },
        {
            title: 'OFTALMOSCOPIO',
            videoId: 'qf1FYilDHQ8',
            description: 'OFTALMOSCOPIO_DESC'
        }
    ];
    currentProjectIndex = 0;
    currentProject = this.projects[0];
    timerSubscription: Subscription;
    iFrameApiReady = false;
    player;

    constructor(private translate: TranslateService) {
    }

    ngOnInit() {
        this.timerSubscription = Observable.timer(0, 10000).subscribe(() => this.switchToNext());

        (<any>window).onYouTubeIframeAPIReady = () => {
            this.iFrameApiReady = true;
            this.player = this.loadYoutubeVideo(this.currentProject.videoId);
        };
    }

    private loadYoutubeVideo(videoId: string) {
        return new (<any>window).YT.Player('ytplayer', {
            width: '100%',
            videoId: videoId,
            playerVars: {'autoplay': 0, 'rel': 0, 'controls': 2},
            events: {
                'onStateChange': ev => this.youTubePlayerStateChange(ev)
            }
        });
    }

    ngAfterViewInit() {
        const doc = (<any>window).document;
        const playerApiScript = doc.createElement('script');
        playerApiScript.type = 'text/javascript';
        playerApiScript.src = 'https://www.youtube.com/iframe_api';
        doc.body.appendChild(playerApiScript);
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

        if (this.iFrameApiReady) {
            this.player.cueVideoById(this.currentProject.videoId);
        }
    }

    previous() {
        this.timerSubscription.unsubscribe();
        if (this.currentProjectIndex === 0) {
            this.currentProjectIndex = this.projects.length - 1;
        } else {
            this.currentProjectIndex--;
        }
        this.currentProject = this.projects[this.currentProjectIndex];

        if (this.iFrameApiReady) {
            this.player.cueVideoById(this.currentProject.videoId);
        }
    }

    youTubePlayerStateChange(event) {
        if (event.data === (<any>window).YT.PlayerState.PLAYING) {
            this.timerSubscription.unsubscribe();
        }
    }
}
