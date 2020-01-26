import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent }   from './main/main.component';
import { AboutComponent } from './about/about.component';
import { PhotosComponent } from './photos/photos.component';

export const AppRoutes: Routes = [
   {
      path: 'home',
      component: MainComponent
   },
   { 
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: 'about',
      component: AboutComponent
   },
   {
      path: 'photos',
      component: PhotosComponent
   },
  { 
     path: '**', 
     component: MainComponent }
   
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
