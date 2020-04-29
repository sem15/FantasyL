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
  leagues=[{"name": "Team Name", "region": "N. America", "owner": "Steven E."}]

  constructor(private router: Router,
              public formBuilder: FormBuilder,
              public leagueService: LeagueService,
              ) {
                //this.items = this.leagueService.getItems();
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

  verifyCode(item){
      alert("The code you entered was " + item.verificationCode);
  }

  logout(){
    firebase.auth().signOut();   
    this.router.navigate(['./tabs/login']);
  }

}
