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


  // initRosters(){
  //   let userId = firebase.auth().currentUser.uid;
  //   this.rosterService.rosters_template[0]={
  //     Team:'default',
  //       id:userId,
  //   }
  //   this.rosterService.initializeRosters(this.leagueService.id,newValues);
  // }


  createLeague(value){
    console.log(value.title);
    console.log(value.roster);
    this.leagueService.createLeague(value.title, value.roster);

    // setTimeout(()=>{
    //   this.initRosters();
    // },1000);




  	this.goBack();
  }

  goBack(){
    this.router.navigate(['./tabs/leagueList']);
  }

}
