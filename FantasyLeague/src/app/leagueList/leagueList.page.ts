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

  constructor(private router: Router,
              public formBuilder: FormBuilder,
              public leagueService: LeagueService,
              ) {
                this.leagues = this.leagueService.getItems();
                console.log(this.leagues);
                for (let i = 0; i < this.leagues.length; i++) {
                  this.db.collection("leagues").where("invCode","==",this.leagues[i]).get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc){
                      var match = doc.data();
                      this.myleagues.push({title:match.Title, invCode:match.invCode})
                    })
                  });
                  
                }
               // this.leagues = this.leagueService.getItems();
              }


  ngOnInit() {
    this.verify_form = this.formBuilder.group({
      verificationCode: new FormControl('', Validators.required)
    });
    
  }

  createLeague(){
  	this.router.navigate(['./tabs/createLeague']);
  }

  goToLeagueOverview(league){
    this.router.navigate(["./tabs/leagueOverview", league]);
  }

  verifyCode(){
    //var array = this.leagueService.getItems();
    
    
    //  this.router.navigate(["./tabs/invite"]);
     // this.leagueService.joinLeague(item.verificationCode);
     //alert("The code you entered was " + item.verificationCode);

  }

  logout(){
    firebase.auth().signOut();   
    this.router.navigate(['./tabs/login']);
  }

}
