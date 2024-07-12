Params Router

In the login url in app.routing.module.ts we will pass id as parameter (  that is  { path: 'login/:id', component: LoginComponent },  )
Whenever we want to pass dynamic value to a particular route then we can use in the app.routing.module.ts. ( as   { path: 'login/:id', component: LoginComponent },  )   path: 'login/:id'. 


app.component.html


<button (click)="login()">Login</button>
<button (click)="register()">Register</button>
<router-outlet></router-outlet>



app.component.ts


export class AppComponent {
constructor(private router: Router){}
login(){
this.router.navigate(['login', 1]);
}

register(){

}
}




Here 1 is mandatory parameters ( 1 in this  this.router.navigate(['login', 1])     ) , any id can be passed as mandatory paramter.
In the browser  when we click Login button in app.component.html the url in the browser turns to ( http://localhost:4200/login/1) Here the 1 in the url is transferred from app.component to login.component.ts. Here we are passing 1 (i.e http://localhost:4200/login/1   )  because we are receiving in login component.
In the login component.ts file as follows


export class LoginComponent {

constructor(private activatedRoute: ActivatedRoute) { 
console.log(activatedRoute.snapshot.params['id'])

}

}



The  activatedRoute will receive all the details about the route. activatedRoute.snapshot.params['id'])  will give the value 1 because activatedRoute.snapshot.params['id']) will return the id value from the route value which is 1.  Here the id is a string (that is in activatedRoute.snapshot.params['id'])    ).  Any value passing in url in browser ( here its 1 in  http://localhost:4200/login/1   ) will be converted to string.
‘snapshot.params’ is one way to get the router params .

Other method to get the route params ( here id in http://localhost:4200/login/1 )  is observable approach. (shown below)


export class LoginComponent {

constructor(private activatedRoute: ActivatedRoute) { 
this.activatedRoute.params.subscribe((data:any)=>{
console.log("Data", data);
})
}
}




Pass data by  navigateByUrl is shown below instead of navigate


app.component.ts


export class AppComponent {
constructor(private router: Router){}
login(){
this.router.navigateByUrl("/login/" + 1);
}
register(){
}
}




Query params

If we do not want to pass mandatory parameters instead pass data to the component using route is query parameters.




export class AppComponent {
constructor(private router: Router){}
login(){
this.router.navigate(['login', 1]);
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



app.component.html


<button (click)="login()">Login</button>
<button (click)="register()">Register</button>
<router-outlet></router-outlet>


When clicking register button the browser url will be as follows

http://localhost:4200/register?name=Bini&age=24


In app.routing.module.ts the routes for path ‘register’ does not have any mandatory parameter (shown below).

{ path: 'register', component: RegisterComponent },



register.component.ts

export class RegisterComponent {
constructor(private activitatedRoute: ActivatedRoute) {
console.log(this.activitatedRoute.snapshot.queryParams);
}
}




  this.activitatedRoute.snapshot.queryParams (this is one method of accessing query parameters) will get the name and age value as query paramter and the output will be as follows.


Output

{name:’Bini’, age : 24}


Another method to access the query parameters is as follows


export class RegisterComponent {
constructor(private activitatedRoute: ActivatedRoute) {
// console.log(this.activitatedRoute.snapshot.queryParams);
this.activitatedRoute.queryParams.subscribe((data:any)=>{
console.log("Data", data);
})
}
}



Output

Data {name: 'Bini', age: '24'}