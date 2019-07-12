import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: Http) { }

  entername = '';
  enteremail = '';
  entertext = '';
  ngOnInit() {
  }

  myfun(){
        //this is for the post request
        const myObj = {
          "email": this.enteremail,
          'text': this.entertext,
          'name': this.entername
           };
       console.log("myobe us "+myObj);
        this.http.post("https://rugged-dry-tortugas-95899.herokuapp.com/products/sendmail", myObj).
        subscribe((data) => 
        console.log("succes"));
    
  }
}
