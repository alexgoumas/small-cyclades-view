import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuControllerService } from '../services/menu-controller.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  navbarVisible: boolean = true;
  public images = [];

  constructor(public router: Router, private _menuController: MenuControllerService) {
  }

  ngOnInit() {
     this.navbarVisible = this._menuController.check(this.router.url);

     this.images = [
      { img: 'assets/img/main-photo.jpg ', alt: 'Image 1' },
      { img: 'assets/img/2Photo.JPG', alt: 'Image 2' },
      { img: 'assets/img/3Photo.JPG', alt: 'Image 3' },
      { img: 'assets/img/4Photo.JPG', alt: 'Image 4' },
      { img: 'assets/img/5Photo.JPG', alt: 'Image 5' },
      { img: 'assets/img/6Photo.JPG', alt: 'Image 5' },
      { img: 'assets/img/iraklia/7Photo.JPG', alt: 'Image 5' },
      { img: 'assets/img/iraklia/8Photo.JPG', alt: 'Image 5' },
      { img: 'assets/img/iraklia/9Photo.JPG', alt: 'Image 5' },
      { img: 'assets/img/iraklia/10Photo.JPG', alt: 'Image 5' },
      { img: 'assets/img/iraklia/11Photo.JPG', alt: 'Image 5' },
      { img: 'assets/img/iraklia/12Photo.JPG', alt: 'Image 5' },
      { img: 'assets/img/iraklia/13Photo.JPG', alt: 'Image 5' },
      { img: 'assets/img/iraklia/14Photo.JPG', alt: 'Image 5' },
      { img: 'assets/img/iraklia/15Photo.JPG', alt: 'Image 5' },
      { img: 'assets/img/iraklia/16Photo.JPG', alt: 'Image 5' },
      { img: 'assets/img/iraklia/17Photo.JPG', alt: 'Image 5' },
      { img: 'assets/img/iraklia/18Photo.JPG', alt: 'Image 5' },
      { img: 'assets/img/iraklia/19Photo.JPG', alt: 'Image 5' },
      { img: 'assets/img/iraklia/20Photo.JPG', alt: 'Image 5' },
      { img: 'assets/img/iraklia/21Photo.JPG', alt: 'Image 5' },
      { img: 'assets/img/iraklia/22Photo.JPG', alt: 'Image 5' },
      { img: 'assets/img/iraklia/23Photo.JPG', alt: 'Image 5' },
      { img: 'assets/img/iraklia/24Photo.JPG', alt: 'Image 5' },
      { img: 'assets/img/iraklia/25Photo.JPG', alt: 'Image 5' }
  ]
  }
}
