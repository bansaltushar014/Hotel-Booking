import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

import { map } from "rxjs/operators";
//here addig ssomething important
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get("https://rugged-dry-tortugas-95899.herokuapp.com/products/5d1dcc542536fb3aeac1ecfb").
    pipe(map((response) => response.json())).
    subscribe((data) => 
    console.log(data));
  }

}
