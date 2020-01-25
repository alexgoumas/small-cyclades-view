import { Component, OnInit, Input } from '@angular/core';
import { Sponsor } from '../../models/sponsor.model';

@Component({
    selector: 'sponsors-list-item',
    templateUrl: 'sponsors-list-item.component.html',
    styleUrls: ['./sponsors-list-item.component.scss']
})

export class SponsorsListItemComponent implements OnInit {
    @Input()
    sponsor: Sponsor;
    
    constructor() { }

    ngOnInit() { }
}