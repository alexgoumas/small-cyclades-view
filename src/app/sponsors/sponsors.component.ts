import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Sponsor, SponsorType } from '../models/sponsor.model';
import { TedxTitleService } from '../services/tedx-title.service';

@Component({
    selector: 'sponsors',
    templateUrl: 'sponsors.component.html',
    styleUrls: ['./sponsors.component.scss']
})

export class SponsorsComponent implements OnInit {

    platinumSponsors: Sponsor[] = [];

    goldSponsors: Sponsor[] = [];

    silverSponsors: Sponsor[] = [];

    bronzeSponsors: Sponsor[] = [];

    standardSponsors: Sponsor[] = [];

    inKindSponsors: Sponsor[] = [];

    mediaSponsors: Sponsor[] = [];

    grandAirCarrierSponsors: Sponsor[] = [];

    friendsSponsors: Sponsor[] = [];

    constructor(private _dataService: DataService, private _titleService: TedxTitleService) {
        this._titleService.setTitle("Partners");
        this._dataService.sponsors.forEach(sponsor => {
            switch (sponsor.type) {
                case SponsorType.Platinum:
                    this.platinumSponsors.push(sponsor);
                    break;
                case SponsorType.Gold:
                    this.goldSponsors.push(sponsor);
                    break;
                case SponsorType.Silver:
                    this.silverSponsors.push(sponsor);
                    break;
                case SponsorType.Bronze:
                    this.bronzeSponsors.push(sponsor);
                    break;
                case SponsorType.Standard:
                    this.standardSponsors.push(sponsor);
                    break;
                case SponsorType.InKind:
                    this.inKindSponsors.push(sponsor);
                    break;
                case SponsorType.Media:
                    this.mediaSponsors.push(sponsor);
                    break;
                case SponsorType.GrandAirCarrier:
                    this.grandAirCarrierSponsors.push(sponsor);
                    break;
                case SponsorType.Friends:
                    this.friendsSponsors.push(sponsor);
                    break;
                default:
                    console.log(sponsor);
                    throw new Error("Invalid sponsor type");
                    break;
            }
        });
    }

    ngOnInit() { }
}
