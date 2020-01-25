
export interface Speaker {
    _id: string;
    firstName: string;
    middleName: string;
    lastName: string;
    description: string;
    occupation: string;
    speechTitle: string;
    session: number;
    isPerformer: boolean;
    images: string[];
    contactDetails: SpeakerContactDetails;
    startTime: Date;
    endTime: Date;
}

export interface SpeakerContactDetails {
    email: string;
    facebook: string;
    linkedIn: string;
    twitter: string;
    instagram: string;
    youtube: string;
    website: string
}
