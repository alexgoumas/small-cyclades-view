import { Pipe, PipeTransform } from '@angular/core';
import { SponsorType } from '../models/sponsor.model';

@Pipe({
    name: 'sponsorTypeToCol'
})

export class SponsorTypeToColPipe implements PipeTransform {
    transform(value: SponsorType): any {
        switch(value) {
            case SponsorType.Platinum:
                return "col-12 col-md-12 d-flex justify-content-center"
            case SponsorType.Gold:
                return "col-12 col-md-6 d-flex justify-content-center"
            case SponsorType.Silver:
                return "col-12 col-md-4 d-flex justify-content-center"
            case SponsorType.Bronze:
                return "col-12 col-md-4 d-flex justify-content-center"
            case SponsorType.Standard:
                return "col-6 col-md-3 d-flex justify-content-center";
            case SponsorType.InKind:
                return "col-4 col-md-3 d-flex justify-content-center";
            case SponsorType.Media:
                return "col-4 col-md-3 d-flex justify-content-center";
            case SponsorType.GrandAirCarrier:
                return "col-4 col-md-3 d-flex justify-content-center";
            case SponsorType.Friends:
                return "col-4 col-md-3 d-flex justify-content-center";
            default:
                return "col-4 col-md-3 d-flex justify-content-center";
        }
    }
}
