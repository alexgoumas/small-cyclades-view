import { Component, OnInit, Input } from '@angular/core';
import { Schedule } from '../models/schedule';

@Component({
    selector: 'schedule',
    templateUrl: 'schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent implements OnInit {
    @Input('schedule')
    schedule: Schedule;

    private _activeTab: number = 1;

    get currentSessionData() {
        switch(this.activeTab) {
            case 1:
                return this.schedule.session1;
            case 2:
                return this.schedule.session2;
            case 3:
                return this.schedule.session3;
            case 4:
                return this.schedule.session4;
        }
    }

    get activeTab(): number {
        return this._activeTab;
    }

    set activeTab(value) {
        if (value>=1 && value <=4) {
            this._activeTab = value;
        }
        else {
            this._activeTab = 1;
        }
    }

    goToTab(newTab) {
        this.activeTab = newTab;
    }

    constructor() { }

    ngOnInit() { }
}
