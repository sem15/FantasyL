import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';
import { LeagueService } from '../league.service';




@Component({
  selector: 'app-leagueList',
  templateUrl: 'leagueList.page.html',
  styleUrls: ['leagueList.page.scss']
})
export class leagueListPage implements OnInit{
  verify_form: FormGroup;
 
  //default leagues
  //leagues=[{"Title": "Team Name", "region": "N. America", "owner": "Steven E."}]
  leagues:Array<any>=[];
  db=firebase.firestore();
  myleagues:Array<any>=[];
  currentlist:Array<any>=[];
  
  constructor(private router: Router,
              public formBuilder: FormBuilder,
              public leagueService: LeagueService,
              ) {
                //var self = this;
                
               // this.leagues = this.leagueService.getItems();
                //console.log(this.leagues);
               /*for (let i = 0; i < self.leagues.length; i++) {
                  console.log(self.leagues[i]);
                  this.db.collection("leagues").where("invCode","==",self.leagues[i]).get().then(function(querySnapshot) {
                    self.myleagues = [];
                    
                    querySnapshot.forEach(function(doc){
                      var match = doc.data();
                      self.myleagues.push({title:match.Title, invCode:match.invCode})
                      console.log(self.myleagues);
                    })
                  });
                  
                }*/


               // this.leagues = this.leagueService.getItems();
              // for (let i = 0; i < this.leagues.length; i++) {
               // console.log(this.leagues[i]);
              //  this.db.collection("leagues").where("invCode","==",this.leagues[i]).get().then(function(querySnapshot) {
                  
                  
                 // querySnapshot.forEach(function(doc){
                 //   var match = doc.data();
                    //this.myleagues.push({title:match.Title, invCode:match.invCode});
                   // console.log(self.myleagues);
                 // })
               // });

            //  }

              }


  ngOnInit() {
    this.verify_form = this.formBuilder.group({
      verificationCode: new FormControl('', Validators.required)
    });
    //Each time you create/join league, add to array on firebase user list of accessible leagues


    //This is the array displayed on League List v
    this.myleagues=this.leagueService.getLeagues();
    
    

  }

  createLeague(){
  	this.router.navigate(['./tabs/createLeague']);
  }

  goToLeagueOverview(league){
    this.router.navigate(["./tabs/leagueOverview", league]);
  }

  verifyCode(){
   // var uid = firebase.auth().currentUser.uid;
    //console.log(firebase.auth().currentUser.providerData);
    //console.log(uid);
    //console.log(this.db.collection("Users").where("uid","==",uid).get().then);
    //var array = this.leagueService.getItems();
   /* var self = this;
    this.leagues = this.leagueService.getItems();
    //console.log(this.leagues);
                for (let i = 0; i < this.leagues.length; i++) {
                //  console.log(this.leagues[i]);
                  this.db.collection("leagues").where("invCode","==",this.leagues[i]).get().then(function(querySnapshot) {
                    
                    
                    querySnapshot.forEach(function(doc){
                      var match = doc.data();
                      self.myleagues.push({title:match.Title, invCode:match.invCode});
                     // console.log(self.myleagues);
                    })
                  });

                }*/
      this.router.navigate(["./tabs/invite"]);
     // this.leagueService.joinLeague(item.verificationCode);
     //alert("The code you entered was " + item.verificationCode);

  }

  logout(){
    firebase.auth().signOut();   
    this.router.navigate(['./tabs/login']);
  }

}
