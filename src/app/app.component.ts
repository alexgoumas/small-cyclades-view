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

    constructor() {

    }

    ngOnInit() {
    }
}
