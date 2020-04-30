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

  rosters:Array<any>=[];
  myrosters=[];
  //league=[];
  constructor(
    private router: Router,
    private rosterService: RosterService,
    private leagueService: LeagueService
  ) {
      
   
    
    this.leagueService.getObservable().subscribe((data)=>
    {
      //this.rosters = this.leagueService.myrosters;
      //console.log(this.leagueService.myrosters.rosters.length);


     /* for (let i=0; i < this.leagueService.myrosters.length; i++){
        this.rosters.push(this.leagueService.myrosters[i]);
      }*/
     // this.league=this.leagueService.leagues;
    })
    //console.log(this.roster);
   }
  ngOnInit() {
    
    //this.myrosters = this.leagueService.myrosters;
    this.rosters = this.leagueService.myrosters.rosters;
    console.log(this.rosters);
    //this.myrosters = this.rosters;

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
