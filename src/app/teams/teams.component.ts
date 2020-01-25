import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { TeamMember } from '../models/team-member.model';
import { TedxTitleService } from '../services/tedx-title.service';

@Component({
    selector: 'teams',
    templateUrl: 'teams.component.html',
    styleUrls: ['./teams.component.scss']
})

export class TeamsComponent implements OnInit {
    constructor(private _dataService: DataService, private _titleService: TedxTitleService) { 
        this._titleService.setTitle("Team");
    }

    get teamMembers(): TeamMember[] {
        return this._dataService.teamMembers;
    }

    ngOnInit() { 

    }
}