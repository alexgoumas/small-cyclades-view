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
      { img: 'assets/img/6Photo.JPG', alt: 'Image 6' },
      { img: 'assets/img/7Photo.JPG', alt: 'Image 7' },
      { img: 'assets/img/8Photo.JPG', alt: 'Image 8' },
      { img: 'assets/img/9Photo.JPG', alt: 'Image 9' },
      { img: 'assets/img/10Photo.JPG', alt: 'Image 10' },
      { img: 'assets/img/11Photo.JPG', alt: 'Image 11' },
      { img: 'assets/img/12Photo.JPG', alt: 'Image 12' },
      { img: 'assets/img/13Photo.JPG', alt: 'Image 13' },
      { img: 'assets/img/14Photo.JPG', alt: 'Image 14' },
      { img: 'assets/img/15Photo.JPG', alt: 'Image 15' },
      { img: 'assets/img/16Photo.JPG', alt: 'Image 16' },
      { img: 'assets/img/17Photo.JPG', alt: 'Image 17' },
      { img: 'assets/img/18Photo.JPG', alt: 'Image 18' },
      { img: 'assets/img/19Photo.JPG', alt: 'Image 19' },
      { img: 'assets/img/20Photo.JPG', alt: 'Image 20' },
      { img: 'assets/img/yoga1.jpg', alt: 'Yoga' },
      { img: 'assets/img/yoga2.jpg', alt: 'Yoga' },
      { img: 'assets/img/22Photo.JPG', alt: 'Image 22' },
      { img: 'assets/img/23Photo.JPG', alt: 'Image 23' },
      { img: 'assets/img/24Photo.JPG', alt: 'Image 24' },
      { img: 'assets/img/25Photo.JPG', alt: 'Image 25' },
      { img: 'assets/img/21Photo.JPG', alt: 'Image 21' },
  ]
  }
}
