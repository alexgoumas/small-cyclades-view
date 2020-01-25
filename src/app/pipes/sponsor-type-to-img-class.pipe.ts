import { Pipe, PipeTransform } from '@angular/core';
import { SponsorType } from '../models/sponsor.model';

@Pipe({
    name: 'sponsorTypeToImgClass',
    pure: false
})

export class SponsorTypeToImgClassPipe implements PipeTransform {
    transform(value: SponsorType): any {
        switch (value) {
            case SponsorType.Platinum:
                return "platinum-sponsor";
            case SponsorType.Gold:
                return "gold-sponsor";
            case SponsorType.Silver:
                return "silver-sponsor";
            case SponsorType.Bronze:
                return "bronze-sponsor";
            case SponsorType.Standard:
                return "standard-sponsor";
            case SponsorType.InKind:
                return "inkind-sponsor";
            case SponsorType.Media:
                return "media-sponsor";
                break;
            case SponsorType.Friends:
                return "friend-sponsor";
                break;
            default:
                return "standard-sponsor";
                break;
        }
    }
}
