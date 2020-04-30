import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LeagueService } from '../league.service';
import { RosterService } from '../roster.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-createleague',
  templateUrl: './createleague.page.html',
  styleUrls: ['./createleague.page.scss'],
})
export class CreateleaguePage implements OnInit {

  new_league_form: FormGroup;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public leagueService: LeagueService,
    public rosterService: RosterService
  ){

  }


  ngOnInit() {
    this.new_league_form = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      roster: new FormControl('', Validators.required)
    });
  }


   initRosters(rosterName, inviteCode){
     let userId = firebase.auth().currentUser.uid;
     let rosterslist:Array<any>=[];

     let newValues={
       Team:rosterName,
       invCode:inviteCode,
       rid:this.rosterService.id
     }

     this.rosterService.addRoster(newValues);

     setTimeout(() => {
       this.leagueService.initLeague(newValues)
     }, 1000);

   }


  createLeague(value){
    console.log(value.title);
    console.log(value.roster);
    let randId =  Math.random().toString(36).substr(2, 5);
    this.leagueService.createLeague(value.title, value.roster, randId);

     setTimeout(()=>{
       this.initRosters(value.roster, randId);
     },1000);




  	this.goBack();
  }

  goBack(){
    this.router.navigate(['./tabs/leagueList']);
  }

}
