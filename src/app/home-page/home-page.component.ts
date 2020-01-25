import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { MenuControllerService } from '../services/menu-controller.service';
import { PageTitleService } from '../services/page-title.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  url: string;
  isHome : boolean = true;
  isBlog : boolean = false;
  isCommon : boolean = false;
  fixedHeaderClass : boolean = false;

 /* Variables */
 headerTitle    : string;
 headerSubTitle : string;
 featuredPost   : any;

 navbarVisible: boolean = true;

 constructor(@Inject(DOCUMENT) private document: any, private pageTitleService: PageTitleService, public router: Router, private _menuController: MenuControllerService) {
   /* page title.*/
     this.pageTitleService.title.subscribe((val: string) => {
     this.headerTitle = val;
   });

   /* page subTitle. */
     this.pageTitleService.subTitle.subscribe((val: string) => {
     this.headerSubTitle = val;
   });

 }

 ngOnInit() {
   this.navbarVisible = this._menuController.check(this.router.url);
 }

 @HostListener('scroll', ['$event'])
 onScroll(event) {
     if(event.path && (event.path[0].scrollTop > 0)){
         this.fixedHeaderClass = true;
     }else{
         this.fixedHeaderClass = false;
     }
 }

 onActivate(e, scrollContainer) {
    scrollContainer.scrollTop = 0;
  }

  addToggleClass() {
    $('body').toggleClass('rtl-enable');
  }

  onLearnMoreClicked() {
   $('html, body').animate({
       scrollTop: $("#swipe").offset().top
   }, 500);
  }

  scrollToMap(el: HTMLElement) {
   $('html, body').animate({
     scrollTop: $("#google-maps").offset().top - 150
   }, 500);
 }


}
