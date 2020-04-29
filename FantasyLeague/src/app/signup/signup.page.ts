import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

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
      
      console.log(this.user.email+"  "+this.user.password)
      var email=this.user.email;
      var password=this.user.password;
      var check = true;
      var self=this;
  //
  
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(
        function(error) {
      // Handle Errors here.
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.message);
      if(errorCode.length > 0){
        console.log("Failed");
        check = false;
      }
      else{
        console.log("signup ok")
      }
      // ...
    }).then(function(result){
        if(check == true){
            var db = firebase.firestore();
            db.collection("Users").add({
              //'uid':result.user.uid,
              'Username': email ,
              'Password': password
              
    
            }).then(function(docRef){
              console.log("usetype written with ID: ", docRef.id);
              //update this products arrays
            }).catch(function(error) {
              console.error("Error adding document: ", error);
            });
    
            console.log("You have signed up in here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            //console.log("finished creating account")
            // self.router.navigate(["/login"]);
            self.router.navigate(['./tabs/leagueList']);
        }
        else{
          alert("Bad Signup");
        }
      });    
    }
    else {
      alert("Passwords does not match");    
    }
  }
}
