import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TeamMember, Team } from '../../models/team-member.model';

@Component({
    selector: 'teams-list',
    templateUrl: 'teams-list.component.html'
})

export class TeamsListComponent implements OnInit, OnChanges {
    @Input()
    members: TeamMember[] = [];

    managers: TeamMember[] = [];
    experience: TeamMember[] = [];
    sponsorships: TeamMember[] = [];
    production: TeamMember[] = [];
    digital: TeamMember[] = [];
    finance: TeamMember[] = [];
    marketing: TeamMember[] = [];

    constructor() { }

    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges) { //Is called when it detects changes on input properties of the component
        let currentValue = changes['members'].currentValue;
        if (currentValue) {
            this.members.forEach(member => {
                switch (member.team) {
                    case Team.Digital:
                        this.digital.push(member);
                        break;
                    case Team.Experience:
                        this.experience.push(member);
                        break;
                    case Team.Finance:
                        this.finance.push(member);
                        break;
                    case Team.Managers:
                        this.managers.push(member);
                        break;
                    case Team.Marketing:
                        this.marketing.push(member);
                        break;
                    case Team.Production:
                        this.production.push(member);
                        break;
                    case Team.Sponsorships:
                        this.sponsorships.push(member);
                        break;
                    default:
                        throw new Error("invalid team");
                        break;
                }
            });
            this.reorderTeamMembers();
        }
    }

    private reorderTeamMembers() {
        this.digital = this.getCorrectTeamOrder(this.digital);
        this.experience = this.getCorrectTeamOrder(this.experience);
        this.production = this.getCorrectTeamOrder(this.production);
        this.sponsorships = this.getCorrectTeamOrder(this.sponsorships);
        this.marketing = this.getCorrectTeamOrder(this.marketing);
        let projectManager = this.managers.find(m => this.isProjectManager(m));
        let restOfManagers = this.managers.filter(m => !this.isProjectManager(m));
        this.managers = [projectManager, ...restOfManagers].filter(m => m);
    }

    private getCorrectTeamOrder(team) {
        let manager = team.find(m => this.isManager(m)); //find returns the value of the first element in the provided array that satisfies the provided testing function.
        let restOfTeam = team.filter(m => !this.isManager(m)); //filter removes all non-matching elements
        return [manager, ...restOfTeam].filter(t => t);
    }

    private isProjectManager(teamMember: TeamMember) {
        return teamMember.title && (teamMember.title.toUpperCase().indexOf("PROJECT") >= 0);
    }

    private isManager(teamMember: TeamMember) {
        return teamMember.title && (teamMember.title.toUpperCase().indexOf("MANAGER") >= 0);
    }

}
