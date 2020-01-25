export interface TeamMember {
    _id: string;
    firstName: string;
    team: number;
    lastName: string;
    title: string;
    images: string[];
    contactDetails: TeamMemberContactDetails
}

export interface TeamMemberContactDetails {
    email: string;
    facebook: string;
    linkedIn: string;
    twitter: string;
    instagram: string;
    behance: string;
}

export enum Team {
    Managers = 0,
    Experience = 1,
    Sponsorships = 2,
    Marketing = 3,
    Finance = 4,
    Digital = 5,
    Production = 6
}
