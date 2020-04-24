import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.page.html',
  styleUrls: ['signup.page.scss']
})
export class Signup implements OnInit {

  user={
    email:"",
    password:"",
    confirmation:""};

  constructor(private router: Router) {}


  ngOnInit() {

  }

  goBack(){
    this.router.navigate(['./tabs/login']);
  }

  signup(){
    
    if (this.user.password == this.user.confirmation){
      /*
        REGISTER ACCOUNT
      */
     //this.router.navigate([home page])
    }
    else {
      console.log("Password does not match");
      
    }
  }
}
