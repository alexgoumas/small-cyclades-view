import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Speaker } from '../models/speaker.model';
import { Sponsor } from '../models/sponsor.model';
import { TeamMember } from '../models/team-member.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MailingListResponse } from '../models/mailing-list-response.model';


@Injectable()
export class ApiService {
    private _baseUrl: string = environment.apiBaseUrl;

    constructor(private _httpClient: HttpClient) { }

    async getSpeakers(): Promise<Speaker[]> {
        return this._httpClient.get<Speaker[]>(`${this._baseUrl}speakers`).toPromise(); //or this._baseUrl + "speakers"
    }

    async getSpeaker(id: number): Promise<Speaker> {
        return this._httpClient.get<Speaker>(`${this._baseUrl}speakers/${id}`).toPromise();
    }

    async getSponsors(): Promise<Sponsor[]> {
        return this._httpClient.get<Sponsor[]>(`${this._baseUrl}sponsors`).toPromise();
    }

    async getSponsor(id: number): Promise<Sponsor> {
        return this._httpClient.get<Sponsor>(`${this._baseUrl}sponsor/${id}`).toPromise();
    }

    async getTeamMembers(): Promise<TeamMember[]> {
        return this._httpClient.get<TeamMember[]>(`${this._baseUrl}team-members`).toPromise();
    }

    async getTeamMember(id: number): Promise<TeamMember> {
        return this._httpClient.get<TeamMember>(`${this._baseUrl}team-member/${id}`).toPromise();
    }

    async subscribeToMailingList(email: string): Promise<any> {
        return this._httpClient.post<MailingListResponse>(`${this._baseUrl}mailing-list/subscribe`, {email}).toPromise();
    }
}