import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class Login implements OnInit {
  new_item_form: FormGroup;

  constructor(private router: Router,
              public formBuilder: FormBuilder
              ) {}


ngOnInit() {

  this.new_item_form = this.formBuilder.group({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
}

  signup(){
  	this.router.navigate(['./tabs/signup']);
  }

  login(){
    /*if (stuff is right){
      this.router.navigate([home page])
    }
    */
   console.log("good job");
   this.router.navigate(['./tabs/leagueList']);
  }
}
