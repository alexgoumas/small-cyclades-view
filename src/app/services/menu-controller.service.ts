import { Injectable } from '@angular/core';

@Injectable()
export class MenuControllerService {
    private _hiddenRoutes: string[] = ["/maintenance"];

    constructor() { }

    /**
     * 
     * @param route The current route
     * @return True if the current route must have a navbar, false if it cannot have a navbar
     */
    check(route: string): boolean {
        return this._hiddenRoutes.indexOf(route) < 0;
    }
}