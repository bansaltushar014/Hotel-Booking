import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { RouterModule } from '@angular/router';
import { GridComponent } from './navigation/grid/grid.component';
import { TourComponent } from './navigation/tour/tour.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoomsComponent,
    RestaurantComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    GridComponent,
    TourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
