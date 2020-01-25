import { Component, OnInit, Input } from '@angular/core';
import { TeamMember } from '../../models/team-member.model';

@Component({
    selector: 'teams-list-item',
    templateUrl: 'teams-list-item.component.html',
    styleUrls: ['./teams-list-item.component.scss']
})

export class TeamsListItemComponent implements OnInit {
    @Input()
    name: string;

    @Input()
    description: string;
    
    @Input()
    members: TeamMember[] = [];

    constructor() { }

    ngOnInit() { }
}