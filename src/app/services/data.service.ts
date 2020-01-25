import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { Speaker } from "../models/speaker.model";
import { Sponsor } from "../models/sponsor.model";
import { TeamMember } from "../models/team-member.model";
import { Schedule, Session } from "../models/schedule";
import { environment } from "../../environments/environment.prod";
import * as moment from 'moment';

@Injectable()
export class DataService {
    speakers: Speaker[] = [];
    sponsors: Sponsor[] = [];
    teamMembers: TeamMember[] = [];
    schedule: Schedule = {} as Schedule;

    constructor(private _apiService: ApiService) {}

    async init(): Promise<any> {
        return Promise.all([
            this._apiService.getSpeakers(),
            this._apiService.getSponsors(),
            this._apiService.getTeamMembers()
        ]).then(results => {
            this.speakers = results[0];
            this.sponsors = results[1];
            this.teamMembers = results[2];
            this.schedule = {
                session1: {
                    speakers: this.speakers.filter(s => s.session == 1 && !s.isPerformer),
                    performer: this.speakers.find(s => s.session == 1 && s.isPerformer),
                    start: environment.startTimes.session1
                },
                session2: {
                    speakers: this.speakers.filter(s => s.session == 2 && !s.isPerformer),
                    performer: this.speakers.find(s => s.session == 2 && s.isPerformer),
                    start: environment.startTimes.session2
                },
                session3: {
                    speakers: this.speakers.filter(s => s.session == 3 && !s.isPerformer),
                    performer: this.speakers.find(s => s.session == 3 && s.isPerformer),
                    start: environment.startTimes.session3
                },
                session4: {
                    speakers: this.speakers.filter(s => s.session == 4 && !s.isPerformer),
                    performer: this.speakers.find(s => s.session == 4 && s.isPerformer),
                    start: environment.startTimes.session4
                }
            };
            [this.schedule.session1, this.schedule.session2, this.schedule.session3, this.schedule.session4].forEach(session => this.calculateTimes(session));
            console.log(this.schedule);
        });
    }

    // Uses the session's startTime value to calculate start and end times for each speaker
    // Performances take up ~30 minutes and speakers ~20 minutes
    calculateTimes(session: Session) {
        if (session.performer) {
            session.performer.startTime = session.start;
            session.performer.endTime = moment(session.performer.startTime).add(15, "minutes").toDate();
        }
        session.speakers.forEach( (speaker, index) => {
            if (index == 0) {
                speaker.startTime = session.performer ? session.performer.endTime : session.start;
            }
            else {
                speaker.startTime = session.speakers[index - 1].endTime;
            }
            speaker.endTime = moment(speaker.startTime).add(20, "minutes").toDate();
        });
    }
}
