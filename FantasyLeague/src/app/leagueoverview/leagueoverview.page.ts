import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leagueoverview',
  templateUrl: './leagueoverview.page.html',
  styleUrls: ['./leagueoverview.page.scss'],
})
export class LeagueoverviewPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['./tabs/leagueList']);
  }

  draftLobbyTest(){
    this.router.navigate(['./tabs/draftLobby']);
  }

}
