import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Speaker } from '../models/speaker.model';
import { TedxTitleService } from '../services/tedx-title.service';

@Component({
    selector: 'speakers',
    templateUrl: 'speakers.component.html',
    styleUrls: ['./speakers.component.scss']
})

export class SpeakersComponent {
    constructor(private _dataService: DataService, private _titleService: TedxTitleService) { 
        this._titleService.setTitle("Speakers");
    }

    get speakers(): Speaker[] {
        return this._dataService.speakers;
    }
}