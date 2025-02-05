import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router){}
   login(){
    this.router.navigate(['login', 1]);
    //this.router.navigateByUrl("/login/" + 1);
   }

   register(){
    this.router.navigate(['register'], {
      queryParams: {
        name: 'Bini',
        age: 24
      }
    })
   }
}
