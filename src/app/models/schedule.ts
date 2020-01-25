import { Speaker } from "./speaker.model";

export interface Session {
    start: Date;
    speakers: Speaker[];
    performer: Speaker;
}

export interface Schedule {
    session1?: Session;
    session2?: Session;
    session3?: Session;
    session4?: Session;
}
