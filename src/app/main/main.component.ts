import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, HostListener, Inject, ElementRef, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../core/page-title/page-title.service';
import { ChkService } from '../service/chk.service';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { MenuControllerService } from '../services/menu-controller.service';
declare var $ : any;
declare var particlesJS: any;
import particlesConfig from './particles-config';

@Component({
    selector: 'angly-layout',
  	templateUrl:'./main.component.html',
  	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit{
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

	constructor(@Inject(DOCUMENT) private document: any, private pageTitleService: PageTitleService, private service:ChkService, public router: Router, private _menuController: MenuControllerService) {
		/* page title.*/
			this.pageTitleService.title.subscribe((val: string) => {
			this.headerTitle = val;
		});

		/* page subTitle. */
			this.pageTitleService.subTitle.subscribe((val: string) => {
			this.headerSubTitle = val;
		});

		this.service.getFeaturedPost().
			subscribe(response => {this.featuredPost = response},
			          err    => console.log(err),
			          ()     => this.featuredPost
			       );
	}

	ngOnInit() {
		this.navbarVisible = this._menuController.check(this.router.url);
	}

	ngAfterViewInit() {
        try {
            particlesJS('particlesContainer', particlesConfig);
        } catch(err) {}
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
