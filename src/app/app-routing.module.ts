import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent }   from './main/main.component';
import { HomeComponent } from './home/home.component';

export const AppRoutes: Routes = [{
   path: '',
   redirectTo: 'home',
   pathMatch: 'full',
   },{
      path: '',
      component: MainComponent,
      children: [
         {
            path: 'home',
            component: HomeComponent
         }
      ]
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
