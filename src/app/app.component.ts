import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { DataService } from './services/data.service';
import { Router, NavigationEnd } from '@angular/router';
import particlesConfig from './main/particles-config';
declare var particlesJS: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    title = 'app';
    comingSoonMode: boolean = environment.comingSoonMode;
    loading: boolean = false;
    private readonly _particlesContainerId: string = "particlesContainer";

    constructor(private _dataService: DataService, private _router: Router) {

    }

    ngOnInit() {
        this.scrollOnNavigation();
        this.enableParticles();
        console.log("initiate data service");
        this.loading = true;
        this._dataService.init().then(() => {
            console.log("data service done");
            console.log(this._dataService.speakers);
            console.log(this._dataService.sponsors);
            console.log(this._dataService.teamMembers);
            this.loading = false;
            if (document.getElementById(this._particlesContainerId)) {
                particlesJS(this._particlesContainerId, particlesConfig);   
            }
        });
    }

    scrollOnNavigation() {
        this._router.events.subscribe(event => {
            // if (document.getElementById(this._particlesContainerId)) {
            //     particlesJS(this._particlesContainerId, particlesConfig);   
            // }
            if (event instanceof NavigationEnd) {
                window.scrollTo(0,0);
            }
        })
    }

    enableParticles() {
        this._router.events.subscribe(event => {
            if (event instanceof NavigationEnd && event.url.indexOf("home") > 0) {
                setTimeout(() => {
                    particlesJS(this._particlesContainerId, particlesConfig);
                }, 1000);
            }
        })
    }

    async wait(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, ms);
        }); 
    }
}
