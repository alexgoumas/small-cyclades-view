import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import * as moment from 'moment';
@Component({
    selector: 'countdown',
    templateUrl: 'countdown.component.html',
    styleUrls: ['./countdown.component.scss']
})

export class CountdownComponent implements OnInit, AfterViewInit {

    @Input()
    targetDate: Date;

    number: number;

    daysElement: HTMLElement;
    hoursElement: HTMLElement;
    minutesElement: HTMLElement;
    secondsElement: HTMLElement;

    countdown: any;

    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {
        this.number = Math.abs(moment().diff(this.targetDate, "seconds"));
        this.timer(this.number);
    }

    convertFormat(format) {
        switch (format) {
            case 'seconds':
                return this.timer(this.number);
            case 'minutes':
                return this.timer(this.number * 60);
            case 'hours':
                return this.timer(this.number * 60 * 60);
            case 'days':
                return this.timer(this.number * 60 * 60 * 24);
        }
    }

    timer(seconds) {
        const now = Date.now();
        const then = now + seconds * 1000;

        this.countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);

            if (secondsLeft <= 0) {
                clearInterval(this.countdown);
                return;
            };

            this.displayTimeLeft(secondsLeft);

        }, 1000);
    }

    displayTimeLeft(seconds) {
        this.daysElement.textContent = `${Math.floor(seconds / 86400)}`;
        this.hoursElement.textContent = `${Math.floor((seconds % 86400) / 3600)}`;
        this.minutesElement.textContent = `${Math.floor((seconds % 86400) % 3600 / 60)}`;
        this.secondsElement.textContent = `${seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}`;
    }
}