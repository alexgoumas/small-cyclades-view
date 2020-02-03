import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../core/page-title/page-title.service';
import { ChkService } from '../service/chk.service';

@Component({
  selector: 'angly-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  map: string = 'assets/img/map.png';
  constructor( private pageTitleService: PageTitleService) {

    /* Page title */
    this.pageTitleService.setTitle(" Lets Get In Touch ");
  }

  ngOnInit() {
  }

}
