import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../core/page-title/page-title.service';
import { ChkService } from '../service/chk.service';
import { TedxTitleService } from '../services/tedx-title.service';

@Component({
  selector: 'angly-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

   /* Variables */
   services : any;
   about    : any;
   team     : any;
   contact  : any;

   constructor(private pageTitleService: PageTitleService, private service:ChkService,  private _titleService: TedxTitleService) {
      this._titleService.setTitle("About");

      this.service.getServices().
         subscribe(response => {this.services = response},
                  err       => console.log(err),
                  ()        =>this.services
               );

      this.service.getAbout().
         subscribe(response => {this.about = response},
                   err      => console.log(err),
                   ()       => this.about
               );

      this.service.getContactContent().
         subscribe(response => {this.contact = response},
                   err      => console.log(err),
                   ()       => this.contact
               );

   }


   ngOnInit() {
   }
   

}
