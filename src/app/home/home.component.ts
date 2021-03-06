import { Component, OnInit } from '@angular/core';
import { ChkService } from '../service/chk.service';
import { TedxTitleService } from '../services/tedx-title.service';
import { DataService } from '../services/data.service';
declare var $ : any;

@Component({
  selector: 'angly-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  /* Variables */
  homeContent    : any;
  services       : any;
  projectGallary : any;
  posts          : any;
  team           : any;
  pricingContent : any;
  contact        : any;
  videoContent   : any;
  mobileFeatured : any;
  testimonial    : any;
  targetDate: Date = new Date(2019, 4, 19, 10, 0, 0);

  constructor( private service:ChkService, private _titleService: TedxTitleService, public dataService: DataService ) {
      this._titleService.setTitle("Home");
      this.service.getHomeContent().
         subscribe(response => {this.homeContent = response},
                   err      => console.log(err),
                   ()       => this.getContent(this.homeContent)
               );

      this.service.getServices().
         subscribe(response => {this.services = response},
                  err       => console.log(err),
                  ()        =>this.services
               );

      this.service.getPosts().
         subscribe(response => {this.posts = response},
                  err      => console.log(err),
                  ()       => this.posts
               );

      this.service.getProjectGallary().
         subscribe(response => {this.projectGallary = response},
                   err      => console.log(err),
                   ()       => this.projectGallary
               );


      this.service.getTeam().
         subscribe(response => {this.team = response},
                   err      => console.log(err),
                   ()       => this.team
               );

      this.service.getPricingPageContent().
         subscribe(response => {this.pricingContent = response},
                  err       => console.log(err),
                  ()        => this.pricingContent
               );

      this.service.getContactContent().
         subscribe(response => {this.contact = response},
                   err      => console.log(err),
                   ()       => this.contact
               );

      this.service.getHomeTestimonial().
         subscribe(response => {this.testimonial = response},
                   err      => console.log(err),
                   ()       => this.testimonial
               );
      }

  ngOnInit() {
  }


  /*
   * getContent is used for get the home page content.
   * Used variables is videoContent and mobileFeatured.
   */
   getContent(content)
   {
      this.videoContent    = content.video_content;
      this.mobileFeatured  = content.mobile_featured;
   }

   subscribeFormClasses : any = {rowClass:"row", fieldClass:"col-sm-12 col-md-6"}



}
