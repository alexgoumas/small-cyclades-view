import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuControllerService } from '../services/menu-controller.service';

@Component({
  selector: 'angly-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

   navbarVisible: boolean = true;
   homeaway: string = "assets/img/homeaway-logo.png";
   airbnb: string = "assets/img/airbnb-logo.jpg";

   constructor(public router: Router, private _menuController: MenuControllerService) {
   }


   ngOnInit() {
      this.navbarVisible = this._menuController.check(this.router.url);
   }
}
