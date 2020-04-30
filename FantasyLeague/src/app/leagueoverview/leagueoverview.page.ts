import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RosterService} from '../roster.service';
import {LeagueService} from'../league.service';

@Component({
  selector: 'app-leagueoverview',
  templateUrl: './leagueoverview.page.html',
  styleUrls: ['./leagueoverview.page.scss'],
})
export class LeagueoverviewPage implements OnInit {

  roster=[]
  league=[]
  constructor(
    private router: Router,
    private rosterService: RosterService,
    private leagueService: LeagueService
  ) {
    this.roster=this.rosterService.roster;
    this.rosterService.getObservable().subscribe((data) =>{
      this.roster=this.rosterService.roster;
    });
    this.league=this.leagueService.leagues;
    this.leagueService.getObservable().subscribe((data)=>
    {
      this.league=this.leagueService.leagues;
    })
    console.log(this.roster);
   }
  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['./tabs/leagueList']);
  }

  draftLobbyTest(){
    this.router.navigate(['./tabs/draftLobby']);
  }

  goToRoster(rost){
    console.log(rost);
    this.rosterService.param=rost;
    console.log(this.rosterService.param);
  	this.router.navigate(["/roster-overview"]);

  }

}
