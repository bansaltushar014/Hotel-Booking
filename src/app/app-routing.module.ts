import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {RoomsComponent} from './rooms/rooms.component';
import {RestaurantComponent} from './restaurant/restaurant.component';

const routes: Routes = [
  {path: 'blog', component:BlogComponent },
  {path: 'rooms', component:RoomsComponent },
  {path: 'restaurant', component:RestaurantComponent },
  {path: 'about', component:AboutComponent },
  {path: 'contact', component:ContactComponent },
  {path: 'home', component:HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
