import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {
  constructor(private activitatedRoute: ActivatedRoute) {
    // console.log(this.activitatedRoute.snapshot.queryParams);
    this.activitatedRoute.queryParams.subscribe((data:any)=>{
      console.log("Data", data);
    })
   }
}
