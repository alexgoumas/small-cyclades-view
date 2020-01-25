import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable()
export class TedxTitleService {

    constructor(private _titleService: Title) { }

    getTitle(): string {
        return this._titleService.getTitle();
    }

    setTitle(newTitle: string) {
        this._titleService.setTitle(`${newTitle} | TEDxUniversityofPiraeus 2019`);
    }
}