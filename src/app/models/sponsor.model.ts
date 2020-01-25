export interface Sponsor {
    _id: string;
    name: string;
    description: string;
    logo: string;
    website: string;
    type: SponsorType;
}

export enum SponsorType {
    Platinum = "Platinum",
    Gold = "Gold",
    Silver = "Silver",
    Bronze = "Bronze",
    InKind = "InKind",
    Standard = "Standard",
    Media = "Media",
    Friends = "Friends",
    GrandAirCarrier = "GrandAirCarrier"
}
