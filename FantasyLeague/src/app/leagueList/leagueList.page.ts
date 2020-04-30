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
                this.leagueService.getObservable().subscribe((data) => {
                  var myuid = firebase.auth().currentUser.uid; //does match roster.uid
                  console.log(myuid);
                  this.leagues = this.leagueService.leagues;//gives ALL Leagues
                  console.log(this.leagues);
                  console.log(this.leagueService.leagues);
                  for (let i = 0; i < this.leagues.length; i++){
                    for (let j = 0; j < this.leagues[i].rosters.length; j++){
                      console.log(this.leagues[i].rosters.length + " Current Roster length");
                      if(myuid == this.leagues[i].rosters[j].uid){
                        this.currentlist.push(this.leagues[i]);
                      }
                    }
                  }
                  console.log(this.currentlist);
                });
                
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

              }


  ngOnInit() {
    this.verify_form = this.formBuilder.group({
      verificationCode: new FormControl('', Validators.required)
    });
    //Each time you create/join league, add to array on firebase user list of accessible leagues


    //This is the array displayed on League List v
    this.myleagues = this.currentlist;
    
    

  }

  createLeague(){
  	this.router.navigate(['./tabs/createLeague']);
  }

  goToLeagueOverview(league){
    
    this.leagueService.myrosters = league;
    console.log(league);
    this.router.navigate(["./tabs/leagueOverview"]);
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
