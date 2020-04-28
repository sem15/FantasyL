import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as firebase from 'Firebase';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class Login implements OnInit {
  new_item_form: FormGroup;
  password_form: FormGroup;
  

  constructor(private router: Router,
              public formBuilder: FormBuilder
              ) {}


ngOnInit() {

  this.new_item_form = this.formBuilder.group({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  this.password_form = this.formBuilder.group({
    email: new FormControl('', Validators.required)
  })

}

  signup(){
  	this.router.navigate(['./tabs/signup']);
  }

  login(item){
    console.log(item.email+"   "+item.password)
    var self = this;
    var email=item.email;
    var password=item.password;
    var check = true;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      //console.log(errorMessage);
  
      if (errorCode.length > 0) {
              alert(errorCode);
              check = false;
      }
      
      console.log(error);
    }
    ).then(function(user){
          if(check == true){
            self.router.navigate(["./tabs/leagueList"]);
          }
          else{
            console.log("errors");
          }
    });
  }

  forgotPassword(item){
    //if email is valid
    var db = firebase.firestore();
    firebase.auth().sendPasswordResetEmail(item.email).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode.length == 0){
        alert("FantasyL has sent (" + item.email + ") a reset password email, if it exists. Try to remember this code");
      }
      else {
        alert("Oops! " + errorMessage);
      }
    });
  }
  loginGoogle(){  //not sure whats wrong with this... its exactly what works for my hw ~ Steven
    var self=this;
  		console.log("google login")
  		// Using a popup.
		var provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('profile');
		provider.addScope('email');
		firebase.auth().signInWithPopup(provider).then(function(result) {
		 // This gives you a Google Access Token.
		 var token = result.credential.providerId;
		 // The signed-in user info.
		 var user = result.user;
		 console.log(user);
		 console.log("login succeeded")
		 self.router.navigate(["/tabs/leagueList"]);
		});
  }
   
  
}
