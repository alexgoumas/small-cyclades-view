import { Component, OnInit, Input } from '@angular/core';
import { Session } from 'selenium-webdriver';
import { Speaker } from '../../models/speaker.model';

@Component({
    selector: 'schedule-item',
    templateUrl: 'schedule-item.component.html',
    styleUrls: ['./schedule-item.component.scss']
})

export class ScheduleItemComponent implements OnInit {
    @Input()
    speaker: Speaker = {} as Speaker;

    constructor() { }

    ngOnInit() { }
}
