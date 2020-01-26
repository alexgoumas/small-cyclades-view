import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SlickModule } from 'ngx-slick';
import { DirectivesModule } from './core/directive/directives.module';


/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Service */
import { ChkService } from './service/chk.service';

/* components */
import { AppComponent } from './app.component';
import { MainComponent }   from './main/main.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

import { MenuItems } from './core/menu/menu-items/menu-items';
import { MenuToggleModule } from './core/menu-toggle.module';
import { PageTitleService } from './core/page-title/page-title.service';
import { WidgetsModule } from './widgets/widgets.module';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { SupportComponent } from './support/support.component';
import { Footer2Component } from './footer2/footer2.component';
import { sidebarWidgetsComponent } from './sidebarWidgets/sidebarWidgets.component';
import { MenuControllerService } from './services/menu-controller.service';
import { MaintenanceComponent } from './session/maintenance/maintenance.component';
import { ApiService } from './services/api.service';
import { DataService } from './services/data.service';
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';
import { NotFoundComponent } from './session/notFound/notFound.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamsListItemComponent } from './teams/teams-list-item/teams-list-item.component';
import { TeamsListComponent } from './teams/teams-list/teams-list.component';
import { CountdownComponent } from './countdown/countdown.component';
import { ServiceGridComponent } from './widgets/grid/serviceGrid/serviceGrid.component';
import { MobileFeaturedComponent } from './widgets/mobileFeatured/mobileFeatured.component';
import { SponsorsListItemComponent } from './sponsors/sponsors-list-item/sponsors-list-item.component';
import { SponsorsListComponent } from './sponsors/sponsors-list/sponsors-list.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { SponsorTypeToImgClassPipe } from './pipes/sponsor-type-to-img-class.pipe';
import { SponsorTypeToColPipe } from './pipes/sponsor-type-to-col-class.pipe';
import { TedxTitleService } from './services/tedx-title.service';
import { BlogModule } from './blog/blog.module';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleItemComponent } from './schedule/schedule-item/schedule-item.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    PricingComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    FeaturesComponent,
    AboutComponent,
    SearchComponent,
    SupportComponent,
    Footer2Component,
    sidebarWidgetsComponent,
    MaintenanceComponent,
    LoadingOverlayComponent,
    NotFoundComponent,
    SpeakersComponent,
    TeamsComponent,
    TeamsListItemComponent,
    TeamsListComponent,
    CountdownComponent,
    ServiceGridComponent,
    MobileFeaturedComponent,
    SponsorsListItemComponent,
    SponsorsListComponent,
    SponsorsComponent,
    SponsorTypeToImgClassPipe,
    SponsorTypeToColPipe,
    ScheduleComponent,
    ScheduleItemComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    WidgetsModule,
    MenuToggleModule,
    DirectivesModule,
    BlogModule, // for masonry style
    SlickModule.forRoot()
  ],
  providers: [
    MenuItems,
    PageTitleService,
    ChkService,
    MenuControllerService,
    ApiService,
    DataService,
    Title,
    TedxTitleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
