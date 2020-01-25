import { Component, OnInit, Input } from '@angular/core';
import { Sponsor, SponsorType } from '../../models/sponsor.model';

@Component({
    selector: 'sponsors-list',
    templateUrl: 'sponsors-list.component.html',
    styleUrls: ['./sponsors-list.component.scss']
})

export class SponsorsListComponent implements OnInit {
    @Input()
    name: string;

    @Input()
    sponsors: Sponsor[] = [];

    @Input()
    type: SponsorType;
    
    constructor() { }

    ngOnInit() { }
}